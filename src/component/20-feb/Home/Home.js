import React from 'react';
import './Home.scss'

 const Home = () => {
    const categories = [
        {id:1, title: 'Hats', imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'},
        {id:1, title: 'Jackets', imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png'},
        {id:1, title: 'Sneakers', imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'},
        {id:1, title: 'Womens', imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png'},
        {id:1, title: 'Mens', imageUrl: 'https://i.ibb.co/R70vBrQ/mens.png'},
    ]

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
export default Home