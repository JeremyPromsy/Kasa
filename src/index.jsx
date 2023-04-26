import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav'
import Footer from './components/Footer'

import Home from './pages/Home'
import Error404 from './pages/404'
import APropos from './pages/APropos'
import Fiche from './pages/Fiche'

import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path = "/" element ={<Home />} />
      <Route path = "/apropos" element ={<APropos />} />
      <Route path = "/logement" element ={<Fiche />} />
      <Route path = "*" element ={<Error404 />} /> 
    </Routes>
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
);