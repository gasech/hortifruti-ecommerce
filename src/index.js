import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

// Pages
import Home from './pages/Home';
import Products from './pages/ProductListing';
import ProductPage from './pages/ProductPage';
import PageNotFound from './pages/PageNotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />}/>
        <Route path="products" element={<Products />} />
        <Route path="products/:productName" element={<ProductPage />}/>
        
        {/* 404 - Not Found*/}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();