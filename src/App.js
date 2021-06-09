import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import * as ROUTES from './constants/routes'
const Dashboard = lazy(() => import('./pages/dashboard'));
const Login = lazy(() => import('./pages/login'))

export default function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.DASHBOARD} component={Dashboard} exact />
        </Switch>
      </Suspense>
    </Router>

  );
}

