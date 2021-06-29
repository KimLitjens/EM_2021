import React from 'react'
import { NextGamesContainer } from '../containers/nextGames'
import { LastGamesContainer } from '../containers/lastGames'
import { TopScorersContainer } from '../containers/topScorers'

export default function Dashboard() {

    return (
        <div className="">
            <header>
                <h1 className="flex justify-center text-red-500 m-4">
                    NederFrench EM 2021 (510)
            </h1>
            </header>
            <div className=" ">
                <div className="flex justify-around">
                    <LastGamesContainer />
                    <NextGamesContainer />
                </div>
                <div className="flex justify-center">
                    <TopScorersContainer />
                </div>
            </div>
        </div>
    )
}



