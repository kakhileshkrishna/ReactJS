import logo from "./logo.svg";
import "./App.css";
import ClassComponent from "./components/ClassComponent";
import UseState from "./components/UseState";
import UseEffect from "./components/UseEffect";
import OnChange from "./components/OnChange";
import OnSubmit from "./components/OnSubmit";
import MapFilter from "./components/MapFilter";
import Header from "./components-exp/Header";
import Footer from "./components-exp/Footer";
import Home from "./components-exp/Home";
import LoginForm from "./small-projects/LoginForm";
import SignUp from "./small-projects/SignUp";
import CalculatorApp from "./small-projects/CalculatorApp";
import { useState, useEffect } from "react";
import FetchAPI from "./Fetch-Data/FetchAPI";
import Axios from "./Fetch-Data/Axios";
import Firebase from "./small-projects/Firebase";
import Navbar from "./components-exp/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components-exp/About";
import Dashboard from "./components-exp/Dashboard";
import ContextProviderComponent from "./Hooks/ContextProviderComponent";

function App() {
  return (
    <div className="App1">
      <ContextProviderComponent />
      {/*
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/dashboard/:id" element={<Dashboard />} /> 
        </Routes>
      </BrowserRouter> 
  */}
    </div>
  );
}

export default App;
