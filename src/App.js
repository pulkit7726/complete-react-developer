import React,{Component} from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/21-feb/Home/Home';
import Navigation from './component/21-feb/Navigaion/Navigation';
import SignIn from './component/22-feb/SignIn';

const Shop = () => {
  return <h1>Shop Now...</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/signin' element={<SignIn />} />
      </Route>
    </Routes>
  );
}


export default App;
