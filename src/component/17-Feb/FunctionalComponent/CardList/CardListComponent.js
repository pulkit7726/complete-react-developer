import React, { Component } from 'react';
import CardComponent from '../CardComponent/CardComponent';
import './CardList.css';

const CardListComponent = ({filterAraay}) => {

    return (
      <div className='card-list '>
      {
        filterAraay.map((value) => {
            return (
            <CardComponent value={value}/>
            )
        })
      }
      </div>
    )
  
}

export default CardListComponent;
