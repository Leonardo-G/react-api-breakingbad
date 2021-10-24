import React from 'react'

export const Episode = ({title, air_date, characters, episode}) => {
    return (
        <div className="episode">
            <p>Title : { title }</p>
            <p>Air date : { air_date }</p>
            <div className="episode__character">
                <p>Characters :</p>
                {
                    characters.map(character => (
                        <p className="cP" key={character}>{character}</p>
                    ))
                }
            </div>
            <p>Episode : { episode }</p>
        </div>
    )
}
