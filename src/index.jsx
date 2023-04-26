import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav'
/*import Footer from './components/Footer'*/

import Home from './pages/Home'
import Error404 from './pages/404'
/*import Fiche from './pages/Fiche'
import APropos from './pages/APropos'*/

import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path = "/" element ={<Home />} />

      <Route path = "*" element ={<Error404 />} /> 
    </Routes>

    </BrowserRouter>
  </React.StrictMode>,
);