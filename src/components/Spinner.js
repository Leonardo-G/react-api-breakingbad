import React from 'react'

export const Spinner = ({totalCharacters, lengthCharacters}) => {

    if(totalCharacters === lengthCharacters) return null;

    return (
        <div className="spinner"></div>

    )
}
