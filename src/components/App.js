import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from '../scenes/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Router>
              <div>
                  <nav>
                      <ul>
                          <li>
                              <Link to="/">Home</Link>
                          </li>
                      </ul>
                  </nav>

                  <Switch>
                      <Route path="/">
                          <Home />
                      </Route>
                  </Switch>
              </div>
          </Router>
      </header>
    </div>
  );
}

export default App;
