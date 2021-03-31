import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import AuthRoutes from './AuthRoutes';
import Landing from '../pages/Landing/Landing';
import PrivateRoutes from './PrivateRoutes'
import About from '../pages/About/About';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/auth" component={AuthRoutes} />
        <Route path="/user" component={PrivateRoutes} />
        <Route exact path="/" component={Landing} />
        <Route exact path="/About" component={About} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
