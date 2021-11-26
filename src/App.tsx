import { Theme, ThemeProvider } from '@mui/system';
import { createTheme } from '@mui/material/styles';

import TopNavbar from './components/TopNavbar';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

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

    return (
        <div className="app">
            <Router>
                <ThemeProvider theme={theme}>
                    <TopNavbar />

                    <Switch>
                        <Route exact path="/projects">
                            <section className="main">Projects</section>
                        </Route>
                        <Route exact path="/about">
                            <section className="main">About</section>
                        </Route>
                        <Route exact path="/contact">
                            <section className="main">Contact</section>
                        </Route>
                        <Route>
                            <section className="main">Home</section>
                        </Route>
                    </Switch>
                </ThemeProvider>
            </Router>
        </div>
    );
}

export default App;
