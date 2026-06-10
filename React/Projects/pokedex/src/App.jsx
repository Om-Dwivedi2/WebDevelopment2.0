import React, { useState } from "react";
import Card from "./components/Card";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
const App = () => {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
       

      </Routes>
      
      </BrowserRouter>
    </>
  );
};

export default App;
