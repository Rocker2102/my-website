import { useEffect, useState } from 'react';

import { Theme, ThemeProvider } from '@mui/system';
import { createTheme, Components, ThemeOptions } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import TopNavbar from './components/TopNavbar';
import BottomNavbar from './components/BottomNavbar';

import './App.css';
import ReactGA from 'react-ga';
import MobileDetect from 'mobile-detect';
import { ROUTES } from './shared/routeData';
import { USER_DATA } from './shared/appSettings';
import { useHistory, Route, Switch } from 'react-router-dom';

/**
 * Automatically detect mobile devices & disable transitions on low-end devices for
 * better user experience.
 */
const shouldEnableTransition = (): boolean => {
    const md = new MobileDetect(window.navigator.userAgent);
    const alwaysDisable = ['Bot', 'MobileBot', 'Watch'];

    if (alwaysDisable.some(type => md.is(type))) return false;
    if (!md.mobile()) return true;
    if (md.mobileGrade() === 'A') return true;

    return false;
};

function App(): JSX.Element {
    const customThemeOptions: ThemeOptions = {
        palette: {
            mode: 'dark'
        },
        components: {
            MuiAppBar: {
                styleOverrides: {
                    colorPrimary: {
                        backgroundColor: 'rgba(48, 48, 52, 0.92)'
                    }
                }
            }
        }
    };

    /**
     * Modify theme options for mobile devices
     */
    if (!shouldEnableTransition()) {
        (customThemeOptions['components'] as Components).MuiButton = {
            defaultProps: {
                disableRipple: true
            }
        };

        customThemeOptions.transitions = {
            create: () => 'none'
        };
    }

    const theme: Theme = createTheme(customThemeOptions);

    const history = useHistory();
    const [path, setPath] = useState(window.location.pathname);

    /**
     * Auto-update page title using current path
     */
    useEffect(() => {
        const titleTag = document.getElementsByTagName('title')[0];

        return history.listen(location => {
            ReactGA.pageview(window.location.pathname + window.location.search);

            const { name } = ROUTES.find(
                route => route.path === location.pathname
            ) as typeof ROUTES[number];

            titleTag.innerText = `${USER_DATA.name} - ${
                name.charAt(0).toUpperCase() + name.substring(1)
            }`;

            setPath(location.pathname);
        });
    }, [history]);

    return (
        <>
            <CssBaseline />

            <div className="app">
                <ThemeProvider theme={theme}>
                    <TopNavbar />

                    <Switch>
                        <Route exact path="/about">
                            <section className="main">
                                <About />
                            </section>
                        </Route>
                        <Route exact path="/connect">
                            <section className="main">
                                <Contact />
                            </section>
                        </Route>
                        <Route exact path="/projects">
                            <section className="main">
                                <Projects />
                            </section>
                        </Route>
                        <Route>
                            <section className="main">
                                <Home />
                            </section>
                        </Route>
                    </Switch>

                    <BottomNavbar currentPath={path} />
                </ThemeProvider>
            </div>
        </>
    );
}

export default App;
