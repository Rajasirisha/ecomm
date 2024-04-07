import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";

function App() {
  return(
<div>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
        
 </Routes>
  </BrowserRouter>

</div>
  );
  
}

export default App;