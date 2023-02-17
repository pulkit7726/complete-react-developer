import React, { Component } from 'react';
import CardComponent from '../CardComponent/CardComponent';
import './CardList.css';

class CardListComponent extends Component {

  render() {
    const {mapArrayFilter} = this.props;
    return (
      <div className='card-list '>
      {
        mapArrayFilter.map((value) => {
            return (
            <CardComponent value={value}/>
            )
        })
      }
      </div>
    )
  }
}

export default CardListComponent;
