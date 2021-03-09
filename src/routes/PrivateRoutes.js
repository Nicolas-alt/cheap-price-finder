import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import User from '../pages/User/User';
import Profile from '../pages/User/Profile/Profile';
import Chart from '../pages/User/Chart/Chart';
import Dashboard from '../pages/User/Dashboard/Dashboard';
import About from '../pages/About/About';
import Results from '../pages/Results/Results';

const PrivateRoutes = () => {
  return (
    <Switch>
      <Dashboard>
        <Route exact path="/user/home" component={User} />
        <Route exact path="/user/profile" component={Profile} />
        <Route exact path="/user/chart" component={Chart} />
        <Route exact path="/user/about" component={About} />
        <Route exact path="/user/search" component={Results} />
        <Redirect to="/user/home" />
      </Dashboard>
    </Switch>
  );
};

export default PrivateRoutes;
