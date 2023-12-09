import React from "react";
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Create from "./components/Create";
import Update from "./components/Update";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/create" element={<Create/>}></Route>
      <Route path="/edit/:id" element={<Update/>}></Route>
      {/* <Route path="/delete/:id" element={<Delete/>}></Route> */}
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
