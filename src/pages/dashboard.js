import React from 'react'
import { NextGamesContainer } from '../containers/nextGames'
import { LastGamesContainer } from '../containers/lastGames'

export default function Dashboard() {

    return (
        <div className="">
            <header>
                <h1 className="flex justify-center text-red-500 text-4xl">
                    NederFrench EM 2021 (510)
            </h1>
            </header>
            <div>
                <h2 className="">Score:</h2>
                <h3>Player 1:</h3>
                <h3>Player 2:</h3>
                <LastGamesContainer />
                <NextGamesContainer />
            </div>
        </div>
    )
}