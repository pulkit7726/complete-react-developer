import React, { Component } from 'react';
import './Card.css';

class CardComponent extends Component {
  render() {
    const { name, email, id } = this.props.value;
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
}
export default CardComponent;