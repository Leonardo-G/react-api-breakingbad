import React from 'react'
import { SeeCharacter } from './SeeCharacter';

export const Character = (characterInfo) => {

    const { char_id: id, name, img, handleShowCharacter } = characterInfo;
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
                    <SeeCharacter handleShowCharacter={ handleShowCharacter } id={ id }/>
                }
            </div>
        </>
    )
}
