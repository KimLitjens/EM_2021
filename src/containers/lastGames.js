import React, { useContext } from 'react'
import MatchDataContext from "../context/MatchDataContext"
import { Games } from '../components/'

export function LastGamesContainer() {
    const { allMatchData } = useContext(MatchDataContext);
    const sortedMatchData = allMatchData.sort((a, b) => new Date(a.match_start) - new Date(b.match_start))
    const lastFiveMatches = sortedMatchData.filter(match => match.status_code === 3 || match.status_code === 31 || match.status_code === 32).slice(-5)

    return (
        <div>
            <Games.Title>Last Games</Games.Title>
            {lastFiveMatches.map((content) => (
                <Games.Game key={content.match_id}>
                    {content.home_team.name !== null ? content.home_team.name : "Unknown"} - {content.away_team !== null ? content.away_team.name : "unknown"}
                    <Games.Score>
                        {content.status_code === 3 ? content.stats.ft_score
                            : content.status_code === 31 ? content.stats.ps_score
                                : content.status_code === 32 ? content.stats.et_score
                                    : null}</Games.Score>
                </Games.Game>))}
            {/* <h1>some text</h1> */}
        </div>
    )
}