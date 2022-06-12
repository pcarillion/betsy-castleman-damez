import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Biography from './Pages/Biography'
import Contact from './Pages/Contact'
import Collection from './Pages/Collection'

import HelmetComponent from './Components/Helmet';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path=":slug" element={<Collection />} />
        <Route path="biography" element={<Biography />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
  </BrowserRouter>
);