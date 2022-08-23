import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home'
import Product from './pages/product/Product'

const Routers = () => {
    return(
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/product/:id" element={<Product />} />
        </Routes>
    )
};

export default Routers;