import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Header} from "./components/Header.jsx";
import {Calculator} from "./components/Calculator.jsx";

function App() {


  return (
    <>
        <Header />
        <Calculator />
    </>
  )
}

export default App
