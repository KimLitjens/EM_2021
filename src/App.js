import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext'
import { MatchDataProvider } from './context/MatchDataContext'
import * as ROUTES from './constants/routes'
import { PrivateRoute } from './helpers/privateRoute'

const Dashboard = lazy(() => import('./pages/dashboard'));
const Signup = lazy(() => import('./pages/signup'));
const Login = lazy(() => import('./pages/login'));

export default function App() {

  return (
    <AuthProvider>
      <MatchDataProvider>
        <Router>
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <PrivateRoute path={ROUTES.DASHBOARD} component={Dashboard} exact />
              <Route path={ROUTES.SIGNUP} component={Signup} />
              <Route path={ROUTES.LOGIN} component={Login} />
            </Switch>
          </Suspense>
        </Router>
      </MatchDataProvider>
    </AuthProvider>

  );
}

