import { useEffect, useState } from 'react';

import { Theme, ThemeProvider } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import TopNavbar from './components/TopNavbar';
import BottomNavbar from './components/BottomNavbar';

import './App.css';
import { useHistory, Route, Switch } from 'react-router-dom';

function App(): JSX.Element {
    const theme: Theme = createTheme({
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
    });

    const history = useHistory();
    const [path, setPath] = useState(window.location.pathname);

    useEffect(() => {
        return history.listen(location => {
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
                        <Route exact path="/contact">
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
