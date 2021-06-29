import React, { useContext } from 'react'
import MatchDataContext from "../context/MatchDataContext"
import { Games } from '../components/'

export function NextGamesContainer() {
    const { allMatchData } = useContext(MatchDataContext);
    const sortedMatchData = allMatchData.sort((a, b) => new Date(a.match_start) - new Date(b.match_start))
    const nextFiveMatches = sortedMatchData.filter(match => match.status_code === 0).slice(0, 5)

    return (
        <div>
            <Games.Title>Next Games</Games.Title>
            {nextFiveMatches.map((content) => (<Games.Game key={content.match_id}>
                {content.match_start.slice(8, 10)} - {content.match_start.slice(5, 7)}
                <Games.Time>{content.match_start.slice(10, 16)}</Games.Time>
                { content.home_team !== null ? content.home_team.name
                    : "Unknown"} - { content.away_team !== null ? content.away_team.name
                        : "unknown"}
            </Games.Game >))
            }
        </div>
    )
}


