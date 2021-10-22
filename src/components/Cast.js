import React, { useEffect, useState } from 'react'
import { Character } from './Character';
import { ShowInfoCharacter } from './ShowInfoCharacter';

export const Cast = () => {

    const [arrayCharacters, setArrayCharacters] = useState([]);
    const [characterInfo, setCharacterInfo] = useState({});
    const [showInfo, setShowInfo] = useState(false);

    const consultApi = () => {
        const url = "https://www.breakingbadapi.com/api/characters?limit=20&offset=0";
        fetch(url, {
            method: "GET"
        })
        .then(resp => resp.json())
        .then(resul => {
            setArrayCharacters([...resul])
        })
        .catch(err => console.log(err))
    }
    
    useEffect(() =>{
        consultApi()
    }, [])

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
    
    console.log("Ejecutandose")

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
            </div>
            
            {
                showInfo &&
                <ShowInfoCharacter {...characterInfo} handlePrevious={ handlePrevious } handleNext={ handleNext }/>
            }
        </>
    )
}
