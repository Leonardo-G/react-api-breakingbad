import React, { useEffect, useState } from 'react'
import { Character } from './Character';

export const Cast = () => {

    const [arrayCharacters, setArrayCharacters] = useState([])

    const consultApi = () => {
        const url = "https://www.breakingbadapi.com/api/characters?limit=20&offset=0";
        fetch(url, {
            method: "GET"
        })
            .then(resp => resp.json())
            .then(resul => setArrayCharacters([...resul]))
            .catch(err => console.log(err))
    }

    useEffect(() =>{
        consultApi()
    }, [])

    return (
        <div className="personajes">
            {
                arrayCharacters.map(character => (
                    <Character key={character.char_id}/>
                ))
            }
        </div>
    )
}
