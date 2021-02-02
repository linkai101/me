import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import HomePage from './components/HomePage';
import NotFound from './components/NotFound';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
