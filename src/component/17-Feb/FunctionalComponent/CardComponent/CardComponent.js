import React, { Component } from 'react';
import './Card.css';

const CardComponent = ({value: {name, email, id}}) => {
    return (
    <div className='card-container' key={id}>
        <img 
            alt={`value ${name}`} 
            src={`https://robohash.org/${id}?set=set2&size=180x180`} />
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
    )
  
}
export default CardComponent;