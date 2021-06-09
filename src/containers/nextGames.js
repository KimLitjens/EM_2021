import React from 'react'
import { matchData } from '../matchData'
import { Games } from '../components/'


export function NextGamesContainer() {
    const sortedMatchData = matchData.sort((a, b) => new Date(a.match_start) - new Date(b.match_start))
    const nextFiveMatches = sortedMatchData.slice(0, 5)

    return (
        <>
            <Games.Title>Next Games</Games.Title>
            {nextFiveMatches.map((content) => (<Games.Game key={content.match_id}>
                {content.home_team.name} - {content.away_team.name}
            </Games.Game>))}
        </>

    )
}


