import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderMenu from './components/HeaderMenu';
import Home from './components/Home';

const App = () => (
  <div>
    <Router>
      <div>
        <HeaderMenu />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
