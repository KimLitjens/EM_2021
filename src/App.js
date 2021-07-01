import React, { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'

import MatchDataContext from './context/MatchDataContext'
import * as ROUTES from './constants/routes'

const Dashboard = lazy(() => import('./pages/dashboard'));
const Signup = lazy(() => import('./pages/signup'));
const Login = lazy(() => import('./pages/login'));

const ApiKey = process.env.REACT_APP_API_KEY
const allMatchesApi = `https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${ApiKey}&season_id=510&date_from=2020-09-19`
const topScorersApi = `https://app.sportdataapi.com/api/v1/soccer/topscorers?apikey=${ApiKey}&season_id=510`

export default function App() {
  const [allMatchData, setAllMatchData] = useState([])
  const [topScorers, setTopscorers] = useState([])


  function getAllMatch() {
    fetch(allMatchesApi)
      .then(response => response.json())
      .then(response => setAllMatchData(response.data))
  }

  function getTopscorers() {
    fetch(topScorersApi)
      .then(response => response.json())
      .then(response => setTopscorers(response.data))
  }

  useEffect(() => {
    getAllMatch()
    getTopscorers()
  }, [])
  return (
    <AuthProvider>
      <MatchDataContext.Provider value={{ allMatchData, topScorers }} >
        <Router>
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <Route path={ROUTES.DASHBOARD} component={Dashboard} exact />
              <Route path={ROUTES.SIGNUP} component={Signup} />
              <Route path={ROUTES.LOGIN} component={Login} />

            </Switch>
          </Suspense>
        </Router>
      </MatchDataContext.Provider>
    </AuthProvider>

  );
}

