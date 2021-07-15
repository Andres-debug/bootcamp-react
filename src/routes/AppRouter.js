import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from '../components/Home/Home';
import { Nosotros } from '../components/Nosotros/Nosotros';
import { UserInfo } from '../components/UserInfo/UserInfo';

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/Home'>
          <Home />
        </Route>
        <Route path='/Nosotros'>
          <Nosotros />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/users/:username'>
          <UserInfo />
        </Route>
      </Switch>
    </Router>
  );
};
