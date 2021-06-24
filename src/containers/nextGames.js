import React, { useEffect, useState } from 'react'
import { Games } from '../components/'

const ApiKey = process.env.REACT_APP_API_KEY


export function NextGamesContainer() {
    const [matches, setMatches] = useState([])
    const sortedMatchData = matches.sort((a, b) => new Date(a.match_start) - new Date(b.match_start))
    const nextFiveMatches = sortedMatchData.filter(match => match.status_code !== 3).slice(0, 5)

    async function allMatches() {
        const response = await fetch(`https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${ApiKey}&season_id=510&date_from=2020-09-19`)
            .then(response => response.json())
            .then((data => setMatches(data.data)))
        return response
    }

    useEffect(() => {
        allMatches()
    }, [])

    return (
        <>
            <Games.Title>Next Games</Games.Title>
            {nextFiveMatches.map((content) => (<Games.Game key={content.match_id}>
                {content.match_start.slice(10, 16)} {content.home_team.name !== null ? content.home_team.name : "Unknown"} - {content.away_team !== null ? content.away_team.name : "unknown"}
            </Games.Game>))}
        </>
    )
}