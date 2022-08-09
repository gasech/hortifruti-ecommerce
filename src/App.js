// React
import React from 'react';

// React Router DOM
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Page imports
import Home from './pages/Home';
import Cart from './pages/Cart'
import Products from './pages/ProductListing';
import Product from './pages/Product';
import NotFound from './pages/NotFound';

// Components
import NavBar from 'components/NavBar';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:productName" element={<Product />} />

        {/* 404 - Not Found*/}
        <Route path="*" element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App;