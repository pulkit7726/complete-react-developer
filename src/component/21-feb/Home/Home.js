import React from 'react';
import ComponentItem from '../../20-feb/Home/ComponentItem';

 const Home = () => {
    const categories = [
        {id:1, title: 'Hats', imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'},
        {id:1, title: 'Jackets', imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png'},
        {id:1, title: 'Sneakers', imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'},
        {id:1, title: 'Womens', imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png'},
        {id:1, title: 'Mens', imageUrl: 'https://i.ibb.co/R70vBrQ/mens.png'},
    ]

  return <ComponentItem categories={categories} />
}
export default Home;