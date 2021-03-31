import { Switch, Route, Redirect } from 'react-router-dom';
import { User, Profile, Chart, Dashboard, About, Results } from '../pages';

const PrivateRoutes = () => {
  return (
    <Switch>
      <Dashboard>
        <>
          <Route exact path="/user/home" component={User} />
          <Route exact path="/user/profile" component={Profile} />
          <Route exact path="/user/chart" component={Chart} />
          <Route exact path="/user/about" component={About} />
          <Route exact path="/user/search" component={Results} />
          <Redirect to="/user/home" />
        </>
      </Dashboard>
    </Switch>
  );
};

export default PrivateRoutes;
