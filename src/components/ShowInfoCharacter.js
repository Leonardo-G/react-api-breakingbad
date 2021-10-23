import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTimesCircle } from '@fortawesome/free-solid-svg-icons';


export const ShowInfoCharacter = ({ name, birthday, occupation, img, status, nickname, portrayed, category, handlePrevious, handleNext, handleClose}) => {
   

    return (
        <div className="showInfo">
            <div className="containerInfo">
                <div 
                    className="otherCharacter otherCharacter--close"
                    onClick={ handleClose }
                >
                    <FontAwesomeIcon icon={ faTimesCircle } /> 
                </div>
                <div 
                    className="otherCharacter otherCharacter--after"
                    onClick={ () => handlePrevious() }    
                >
                    <FontAwesomeIcon icon={ faChevronLeft } />
                </div>
                <div className="infoCharacter">
                    <img src={ img } alt={ name }/>
                    <div className="description">
                        <p><span> Name :</span> { name }</p>
                        <p><span> Birthday :</span> { birthday }</p>
                        <p><span> Occupation :</span> { occupation }</p>
                        <p><span> Staus :</span> { status }</p>
                        <p><span> Nickname :</span> { nickname }</p>
                        <p><span> Portrayed :</span> { portrayed }</p>
                        <p><span> Category :</span> { category }</p>
                    </div>
                </div>
                <div 
                    className="otherCharacter otherCharacter--previous"
                    onClick={ () => handleNext() }
                >
                    <FontAwesomeIcon icon={ faChevronRight } />
                </div>
            </div>
        </div>
    )
}
