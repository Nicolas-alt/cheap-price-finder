import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import User from '../pages/User/User'
import Profile from '../pages/User/Profile/Profile'
import Chart from '../pages/User/Chart/Chart'

const PrivateRoutes = () => {
  return (
    <Switch>
      <Route exact path="/user/home" component={User} />
      <Route exact path="/user/profile" component={Profile}/>
      <Route exact path="/user/chart" component={Chart} />
      <Redirect to="/user/home" />
    </Switch>
  );
};

export default PrivateRoutes;
