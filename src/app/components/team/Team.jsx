import React from 'react'
import TeamPlayer from './TeamPlayer'
import { teamPlayerNames } from '../data/TeamPlayerNames';

const teamPlayerNameList = teamPlayerNames.map((item, index) => {
    const { name, imgUrl, positon } = item;
    return <TeamPlayer
        key={index}
        name={name}
        imgUrl={imgUrl}
        position={positon}
    />
})

const Team = () => {
    return (
        <div className="container mx-auto mt-4">
            <h2 className="text-center " id="team">Team</h2>
            <div className="row mx-auto">
                {teamPlayerNameList}
            </div>
        </div>
    )
}

export default Team