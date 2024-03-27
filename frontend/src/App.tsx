import React from 'react'
import { lazy } from 'react'

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
const Home = lazy(()=> import ("./pages/Home"))
const Cart =lazy(()=>import( "./pages/cart"))
const Search =lazy(()=>import( "./pages/search"))


const App = () => {
  return <Router>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>

      <Route path="/search" element={<Search/>}/><Route path="/" element={<Home/>}/>


    </Routes>
  </Router>
}

export default App
