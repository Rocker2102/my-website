import NavbarComponent from './components/NavbarComponent';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';

function App(): JSX.Element {
    return (
        <div className="App">
            <Router>
                <NavbarComponent />

                <Switch>
                    <Route exact path="/projects">
                        <header className="App-header">Projects</header>
                    </Route>
                    <Route exact path="/about">
                        <header className="App-header">About</header>
                    </Route>
                    <Route exact path="/contact">
                        <header className="App-header">Contact</header>
                    </Route>
                    <Route>
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <p>
                                Edit <code>src/App.tsx</code> and save to reload.
                            </p>
                            <a
                                className="App-link"
                                href="https://reactjs.org"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Learn React
                            </a>
                        </header>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
