import React from 'react'
import { NextGamesContainer } from '../containers/nextGames'
import { LastGamesContainer } from '../containers/lastGames'
// import { PlayerLink } from '../containers/playerLink'
// import { playerData } from '../playerData'

export default function Dashboard() {
    // const playerNames = [
    //     playerData.map(item => {
    //         return item.name;
    //     }
    //     )
    // ];

    // const playerList = playerNames.map(name => {
    //     return <PlayerLink playerName={name} />;
    // });

    return (
        <div className="">
            <header>
                <h1 className="flex justify-center text-red-500 m-4">
                    NederFrench EM 2021 (510)
            </h1>
            </header>
            <div className="flex justify-center">
                <div >
                    <div >
                        <h3>Participants:</h3>
                        {/* <ul className="flex ml-4">
                    {playerList}
                </ul> */}
                    </div>
                    <div>
                        <h2 className="">Score:</h2>
                        <LastGamesContainer />
                        <NextGamesContainer />
                    </div>
                </div>
            </div>
        </div>
    )
}



