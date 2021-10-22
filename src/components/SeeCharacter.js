import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

export const SeeCharacter = ({ id }) => {

    
    const handleShowInfo = () => {
        
    }

    return (
        <div 
            className="character__iconView"   
            onClick={ handleShowInfo }
        >
            <FontAwesomeIcon icon={ faEye } />
        </div>
    )
}
