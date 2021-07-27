import React from 'react'
import { useMatchData } from '../context/MatchDataContext'
import { TopScorers } from '../components/'


export function TopScorersContainer() {
    const { topScorers } = useMatchData();
    const top10Scorers = topScorers.slice(0, 10)

    return (
        <div className="mb-4">
            <TopScorers.Title>Top Scorers</TopScorers.Title>
            {top10Scorers.map((content) => (
                <TopScorers.Player key={content.player.player_id}>
                    {content.player.player_name}
                    <TopScorers.Goals >{content.goals.overall}
                    </TopScorers.Goals>
                    <TopScorers.Country>
                        {content.team.team_name}
                    </TopScorers.Country>
                </TopScorers.Player>))}
        </div>
    )
}