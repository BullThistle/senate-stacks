import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HeaderMenu from './components/HeaderMenu';
import Home from './components/Home';
import State from './components/State';
import Legislator from './components/Legislator';

const App = () => (
  <div>
    <BrowserRouter>
      <div>
        <HeaderMenu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:states" component={State} />
          <Route path="/legislator/:cid" component={Legislator} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
