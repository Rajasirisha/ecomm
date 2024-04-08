import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import SingleProduct from "./page/SingleProduct";
import Cart from "./page/Cart";

function App() {
  return(
<div>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/singleproduct" element={<SingleProduct/>} />
        
 </Routes>
  </BrowserRouter>

</div>
  );
  
}

export default App;