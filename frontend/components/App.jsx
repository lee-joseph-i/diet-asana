import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LandingContainer from './landing/landing_container';
import Main from './main/main_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import Footer from './nav_bar/footer';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';

const App = () => (
  <div>
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <Route exact path="/" component={NavBarContainer} />
      <Route exact path="/" component={LandingContainer} />
      <Route exact path="/" component={Footer} />
      <ProtectedRoute path="/app" component={Main} />
  </div>
);

export default App;