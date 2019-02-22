import React from 'react';

const GameCard = ({title, image}) => {
    return (
        <div className="col-md-2 col-lg-2 col-xl-1 col-2 p-0 gameCard">
            <div className="gameCardData">
                <h3 className="gameDataTitle">{title}</h3>
            </div>
            <img className="img-fluid w-100" src={image} /> 
        </div>
    )
}

export default GameCard;