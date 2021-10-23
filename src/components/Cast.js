import React, { useEffect, useState } from 'react'
import { Character } from './Character';
import { ShowInfoCharacter } from './ShowInfoCharacter';
import { Spinner } from './Spinner';

export const Cast = () => {

    const [arrayCharacters, setArrayCharacters] = useState([]);
    const [characterInfo, setCharacterInfo] = useState({});
    const [showInfo, setShowInfo] = useState(false);

    const [limit] = useState(20);
    const [initialCharacters, setInitialCharacters] = useState(0);
    const [spinner, setSpinner] = useState(false);
    const [totalCharacters, setTotalCharacters] = useState(62);
    const [index, setIndex] = useState(0);

    const consultApi = (limitCharacter, initialCharacters) => {
        setSpinner(true)

        const url = `https://www.breakingbadapi.com/api/characters?limit=${limitCharacter}&offset=${initialCharacters}`;
        fetch(url, {
            method: "GET"
        })
        .then(resp => resp.json())
        .then(resul => {
            setSpinner(false);
            setArrayCharacters([...arrayCharacters, ...resul]);
        })
        .catch(err => console.log(err));
    }
    
    useEffect(() =>{
        consultApi(limit, initialCharacters);

       // eslint-disable-next-line 
    }, [initialCharacters]);

    const handleShowCharacter = (id, index) => {
        const objectCharacter = arrayCharacters.filter( character => character.char_id === id);
        setCharacterInfo({...objectCharacter[0]});
        setShowInfo(true);

        //Para luego tener como referencia si queremos el siguiente personaje o el anterior
        setIndex(index);
    }

    const handlePrevious = () => {
        if(index === 0){
            return;
        }

        const indexNext = arrayCharacters.find(( character , indexArray) => indexArray === (index - 1));
        setIndex(index - 1)
        setCharacterInfo({...indexNext});
    }

    
    const handleNext = () => {
        if((index + 1) === totalCharacters){
            return;
        }

        const indexNext = arrayCharacters.find(( character , indexArray) => indexArray === (index + 1))
        setIndex(index + 1)
        setCharacterInfo({...indexNext});
    }

    const handleClose = () => {
        setCharacterInfo({});
        setShowInfo(false)
    }

    const handleShowMoreCharacter = () => {
        if(arrayCharacters.length === totalCharacters){
            return;
        }
        setInitialCharacters( initialCharacters + 20);
    }

    return (
        <>
            <div className="container">
                <div className="CastGrid">
                    {
                        arrayCharacters.map((character, index) => (
                            <Character key={character.char_id} {...character} handleShowCharacter={ handleShowCharacter } index={index}/>
                        ))
                    }
                </div>
                {   //Cantidad maxima de personajes, segun la API
                    (arrayCharacters.length < totalCharacters && !spinner) 
                    
                    ?   <button 
                            className="btn"
                            onClick={ handleShowMoreCharacter }
                        >View more...</button>

                    :   <Spinner totalCharacters={totalCharacters} lengthCharacters={arrayCharacters.length}/>
                }
            </div>
            {
                showInfo &&
                <ShowInfoCharacter {...characterInfo} handlePrevious={ handlePrevious } handleNext={ handleNext } handleClose={ handleClose }/>
            }
        </>
    )
}
