import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

export const SeeCharacter = () => {
    return (
        <div 
            className="character__iconView"   
        >
            <FontAwesomeIcon icon={ faEye } />
        </div>
    )
}
