import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 
import Header from './components/header'
import Footer from './components/footer'

import Home from './pages/Home'
import Error404 from './pages/404'
import APropos from './pages/APropos'
import Fiche from './pages/Fiche'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path = "/" element ={<Home />} />
      <Route path = "/apropos" element ={<APropos />} />
      <Route path = "logement/:id" element ={<Fiche />} />
      <Route path = "*" element ={<Error404 />} /> 
    </Routes>
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
);