import React,{Component} from 'react';
import './App.css';
import { Route, Routes, Outlet } from 'react-router-dom';
import Home from './component/21-feb/Home/Home';
import Navigation from './component/21-feb/Navigaion/Navigation';

const Shop = () => {
  return <h1>Shop Now...</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
      </Route>
    </Routes>
  );
}


export default App;
