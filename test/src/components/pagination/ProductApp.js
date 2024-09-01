import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';


const products =[
    {id: 1, name: "Product 1", description: "Product 1 description", price: "1 Euro"},
    {id: 2, name: "Product 2", description: "Product 2 description", price: "2 Euro"},
    {id: 3, name: "Product 3", description: "Product 3 description", price: "3 Euro"},
    {id: 4, name: "Product 4", description: "Product 4 description", price: "4 Euro"},
    {id: 5, name: "Product 5", description: "Product 5 description", price: "5 Euro"},
    {id: 6, name: "Product 6", description: "Product 6 description", price: "6 Euro"},
    {id: 8, name: "Product 8", description: "Product 8 description", price: "8 Euro"},
    {id: 9, name: "Product 9", description: "Product 9 description", price: "9 Euro"},
    {id: 10, name: "Product 10", description: "Product 10 description", price: "10 Euro"},
    {id: 11, name: "Product 11", description: "Product 11 description", price: "11 Euro"},
];


const ProductApp=() =>{
  return (
    <Router>
        <Routes>
            <Route path='/page/:pageNumber' element={<ProductList products={products}/>}/>
            <Route path='/product/:productId' element={<ProductDetail products={products}/>}/>
            <Route path='/' element={<ProductList products={products}/>}/>
        </Routes>
    </Router>
  );
};

export default ProductApp;