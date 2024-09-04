import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ProductDetails from './components/ProductDetails'
import SearchItem from './components/SearchItem'
import Cart from './components/Cart'
import { items } from './components/Data'
const App = () => {
  const [data,setData] =  useState([...items])
  const [cart,setCart] = useState([])
  return (
    <>
      <BrowserRouter>
        <Navbar setdata={setData} cart={cart} />
        <Routes>
          <Route
            path="/"
            element={<Product items={data} cart={cart} setCart={setCart} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetails cart={cart} setCart={setCart} />}
          />
          <Route
            path="/search/:term"
            element={<SearchItem cart={cart} setCart={setCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App