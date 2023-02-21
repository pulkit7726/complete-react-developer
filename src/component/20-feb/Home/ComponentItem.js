import React from 'react';
import './ComponentItem.scss';

 const ComponentItem = ({categories}) => {

  return (
    <div className='categories-container'>
    {
        categories.map(({title, id, imageUrl}) => (
            <div key={id} className='category-container'>
                <div className='background-image' style={{ backgroundImage: `url(${imageUrl})`}}>
                    <div className='categories-body-container'>
                        <h2>{title}</h2>
                        <p>Shop Now</p>
                    </div>
                </div>            
            </div>
        ))
    }
         
    </div>
  )
}
export default ComponentItem