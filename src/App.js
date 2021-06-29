import React, { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MatchDataContext from './context/MatchDataContext'
import * as ROUTES from './constants/routes'

const Dashboard = lazy(() => import('./pages/dashboard'));

const ApiKey = process.env.REACT_APP_API_KEY
const allMatchesApi = `https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${ApiKey}&season_id=510&date_from=2020-09-19`
const topScorersApi = `https://app.sportdataapi.com/api/v1/soccer/topscorers?apikey=${ApiKey}&season_id=510`

export default function App() {
  const [allMatchData, setAllMatchData] = useState([])
  const [topScorers, setTopscorers] = useState([])


  async function getAllMatch() {
    const response = await fetch(allMatchesApi)
    const data = await response.json()
    setAllMatchData(data.data)
  }

  async function getTopscorers() {
    const response = await fetch(topScorersApi)
    const data = await response.json()
    setTopscorers(data.data)
  }

  useEffect(() => {
    getAllMatch()
    getTopscorers()
  }, [])
  return (
    <MatchDataContext.Provider value={{ allMatchData, topScorers }} >
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route path={ROUTES.DASHBOARD} component={Dashboard} exact />
          </Switch>
        </Suspense>
      </Router>
    </MatchDataContext.Provider>
  );
}

