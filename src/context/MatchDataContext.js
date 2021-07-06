import { createContext, useContext, useEffect, useState } from 'react'

const MatchDataContext = createContext()

export function useMatchData() {
    return useContext(MatchDataContext)
}

const ApiKey = process.env.REACT_APP_API_KEY
const allMatchesApi = `https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${ApiKey}&season_id=510&date_from=2020-09-19`
const topScorersApi = `https://app.sportdataapi.com/api/v1/soccer/topscorers?apikey=${ApiKey}&season_id=510`

export function MatchDataProvider({ children }) {
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

    const value = {
        allMatchData,
        topScorers
    }
    return (
        <MatchDataContext.Provider value={value}>
            {children}
        </MatchDataContext.Provider>
    )
}

