import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from '../scenes/Home';
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Router>
              <div>
                  <Header />

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
