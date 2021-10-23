import React, { useEffect, useState } from 'react'
import { Character } from './Character';
import { ShowInfoCharacter } from './ShowInfoCharacter';

export const Cast = () => {

    const [arrayCharacters, setArrayCharacters] = useState([]);
    const [characterInfo, setCharacterInfo] = useState({});
    const [showInfo, setShowInfo] = useState(false);

    const [limit] = useState(20)
    const [initialCharacters, setInitialCharacters] = useState(0)

    const consultApi = (limitCharacter, initialCharacters) => {
        const url = `https://www.breakingbadapi.com/api/characters?limit=${limitCharacter}&offset=${initialCharacters}`;
        fetch(url, {
            method: "GET"
        })
        .then(resp => resp.json())
        .then(resul => {
            setArrayCharacters([...arrayCharacters, ...resul])
        })
        .catch(err => console.log(err))
    }
    
    useEffect(() =>{
        consultApi(limit, initialCharacters)

       // eslint-disable-next-line 
    }, [initialCharacters])

    const handleShowCharacter = (id) => {
        const objectCharacter = arrayCharacters.filter( character => character.char_id === id);
        setCharacterInfo({...objectCharacter[0]})
        setShowInfo(true)
    }

    const handlePrevious = (id) => {
        if(id === 1){
            return
        }

        const objectCharacter = arrayCharacters.filter( character => character.char_id === (id - 1));
        setCharacterInfo({...objectCharacter[0]})
    }

    
    const handleNext = (id) => {
        if(arrayCharacters.length === id){
            return
        }

        const objectCharacter = arrayCharacters.filter( character => character.char_id === (id + 1));
        setCharacterInfo({...objectCharacter[0]})
    }

    const handleShowMoreCharacter = () => {
        setInitialCharacters( initialCharacters + 20)
    }

    return (
        <>
            <div className="container">
                <div className="CastGrid">
                    {
                        arrayCharacters.map(character => (
                            <Character key={character.char_id} {...character} handleShowCharacter={ handleShowCharacter } />
                        ))
                    }
                </div>
                {   //Cantidad maxima de personajes, segun la API
                    (arrayCharacters.length < 62) &&
                    <button 
                        className="btn"
                        onClick={ handleShowMoreCharacter }
                    >View more...</button>
                }
            </div>
            {
                showInfo &&
                <ShowInfoCharacter {...characterInfo} handlePrevious={ handlePrevious } handleNext={ handleNext }/>
            }
        </>
    )
}
