import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import AuthRoutes from './AuthRoutes';
import Landing from '../pages/Landing/Landing';
import PrivateRoutes from './PrivateRoutes'

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/auth" component={AuthRoutes} />
        <Route path="/user" component={PrivateRoutes} />
        <Route exact path="/" component={Landing} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
