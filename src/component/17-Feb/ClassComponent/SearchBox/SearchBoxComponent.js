import React, { Component } from 'react';
import './SearchBox.css';

class SearchBoxComponent extends Component {
  render() {
    const {onChangeHandler} = this.props;
    return (
      <div>
      <input className='search-box' type="search" placeholder="search name" onChange={onChangeHandler} />    
      </div>
    )
  }
}
export default SearchBoxComponent;
