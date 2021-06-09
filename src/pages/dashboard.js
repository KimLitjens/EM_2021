import React from 'react'
import { matchData } from '../matchData'
export default function Dashboard() {
    const sortedMatchData = matchData.sort((a, b) => new Date(a.match_start) - new Date(b.match_start))
    console.log(sortedMatchData)
    return (
        <header className="">
            <h1 className="flex justify-center text-red-500 text-4xl">
                NederFrench EM 2021 (510)
            </h1>
            <h2 className="">Score:</h2>
            <h3>Player 1:</h3>
            <h3>Player 2:</h3>
            <p className="">Last games:</p>
            <p className="">Next games:</p>

        </header>
    )
}