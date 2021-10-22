import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

export const SeeCharacter = ({ id, handleShowCharacter}) => {

    return (
        <div 
            className="character__iconView"   
            onClick={ e => handleShowCharacter(id) }
        >
            <FontAwesomeIcon icon={ faEye } />
        </div>
    )
}
