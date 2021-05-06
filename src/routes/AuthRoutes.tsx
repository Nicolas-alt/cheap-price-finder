import { Switch, Route, Redirect } from 'react-router-dom';
import { Login, Register } from 'pages';

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
