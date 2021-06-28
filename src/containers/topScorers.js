import React, { useContext } from 'react'
import MatchDataContext from "../context/MatchDataContext"
import { TopScorers } from '../components/'


export function TopScorersContainer() {
    const { topScorers } = useContext(MatchDataContext);
    const top10Scorers = topScorers.slice(0, 10)
    console.log(top10Scorers)

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
        // <h1>some text</h1>
    )
}