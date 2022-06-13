import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Page from './Pages/Page'
import Contact from './Pages/Contact'
import Collection from './Pages/Collection'
import Error from './Pages/404'


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="contact" element={<Contact />} />
        <Route path="contact/:result" element={<Contact />} />
        <Route path="gallery/:slug" element={<Collection />} />
        <Route path="page/:slug" element={<Page />} />
        <Route path="/*" element={<Error />}/>
      </Routes>
  </BrowserRouter>
);