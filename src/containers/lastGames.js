import React, { useContext } from 'react'
import MatchDataContext from "../context/MatchDataContext"
import { Games } from '../components/'

export function LastGamesContainer() {
    const { allMatchData } = useContext(MatchDataContext);
    const sortedMatchData = allMatchData.sort((a, b) => new Date(a.match_start) - new Date(b.match_start))
    const lastFiveMatches = sortedMatchData.filter(match => match.status_code === 3).slice(-5)
    return (
        <>
            <Games.Title>Last Games</Games.Title>
            {lastFiveMatches.map((content) => (<Games.Game key={content.match_id}>
                {content.home_team.name !== null ? content.home_team.name : "Unknown"} - {content.away_team !== null ? content.away_team.name : "unknown"}  {content.stats.ft_score}
            </Games.Game>))}
            {/* // <h1>some text</h1> */}
        </>
    )
}