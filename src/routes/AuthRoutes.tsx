import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'

const AuthRoutes = () => {
  return (
    <Switch>
      <Route exact path="/auth/login" component={Login} />
      <Route exact path="/auth/register" component={Register} />
      <Redirect to="/auth/login" />
    </Switch>
  );
};

export default AuthRoutes;
