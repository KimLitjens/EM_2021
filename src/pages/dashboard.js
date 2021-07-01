import React from 'react'
import { NextGamesContainer } from '../containers/nextGames'
import { LastGamesContainer } from '../containers/lastGames'
import { TopScorersContainer } from '../containers/topScorers'
import { HeaderContainer } from '../containers/header'
import { LogoutContainer } from '../containers/logout'

export default function Dashboard() {

    return (
        <div>
            <HeaderContainer />
            <div>
                <div className="flex justify-around">
                    <LastGamesContainer />
                    <NextGamesContainer />
                </div>
                <div className="flex justify-center">
                    <TopScorersContainer />
                </div>
                <div className="flex justify-center">
                    <LogoutContainer />
                </div>
            </div>
        </div>
    )
}



