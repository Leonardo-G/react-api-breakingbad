import React, { useState } from 'react'
import { SeeCharacter } from './SeeCharacter';
import { ShowInfoCharacter } from './ShowInfoCharacter';

export const Character = (characterInfo) => {

    const { char_id: id, name, img } = characterInfo

    const [showInfo, setShowInfo] = useState({
        show: false,
        id: id
    })

    return (
        <>
            <div 
                className="character"
            >
                <img src={ img } alt={ name } className="character__img"/>
                <div 
                    className="character__info" 
                >
                    <h2 className="character__info--name">{ name }</h2>
                </div>
                {
                    <SeeCharacter id={ id }/>
                }
            </div>
        </>
    )
}
