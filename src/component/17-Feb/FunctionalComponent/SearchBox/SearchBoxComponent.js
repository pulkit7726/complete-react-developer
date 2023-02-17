import React, { Component } from 'react';
import './SearchBox.css';

const SearchBoxComponent = ({onChangeHandler}) => {
    return (
      <div>
      <input className='search-box' type="search" placeholder="search name" onChange={onChangeHandler} />    
      </div>
    )
}
export default SearchBoxComponent;
