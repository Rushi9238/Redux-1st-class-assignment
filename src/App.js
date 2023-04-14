import React from 'react'
import {Routes,Route} from 'react-router-dom'


import './App.css';
import Header from './Components/Layouts/Header';
import Home from './Components/Pages/Home'
import Contact from './Components/Pages/Contact'
import Product from './Components/Pages/Product'
import Redux from './Components/Pages/Redux'


function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/redux' element={<Redux/>} />

     </Routes>
    </div>
  );
}

export default App;
