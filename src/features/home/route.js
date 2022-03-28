import React from 'react'; //Packages should always be listed at the top
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Home } from './pages';

const newHistory = createBrowserHistory();

const HomePage = () => (
  <Router history={newHistory}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>

);

export default withRouter(HomePage);
