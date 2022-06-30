import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from '../src/pages/Home'
import Sucess from '../src/pages/Sucess'

import "./index.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Sucess' element={<Sucess />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
