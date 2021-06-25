import React, { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import MatchDataContext from './context/MatchDataContext'
import * as ROUTES from './constants/routes'

const Dashboard = lazy(() => import('./pages/dashboard'));
const Login = lazy(() => import('./pages/login'));
const Profile = lazy(() => import('./pages/profile'));

const ApiKey = process.env.REACT_APP_API_KEY
const sportDataApi = `https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${ApiKey}&season_id=510&date_from=2020-09-19`

export default function App() {
  const [allMatchData, setAllMatchData] = useState([])

  async function getData() {
    const response = await fetch(sportDataApi)
    const data = await response.json()
    setAllMatchData(data.data)

  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <MatchDataContext.Provider value={{ allMatchData }} >
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.PROFILE} component={Profile} />
            <Route path={ROUTES.DASHBOARD} component={Dashboard} exact />
          </Switch>
        </Suspense>
      </Router>
    </MatchDataContext.Provider>
  );
}

