import { Switch, Route, Redirect } from 'react-router-dom';
import { Profile, Chart, Dashboard, About, Results, Home } from 'pages';

const PrivateRoutes = () => {
  return (
    <Switch>
      <Dashboard>
        <>
          <Route exact path="/user/home" component={Home} />
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
