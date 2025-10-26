import React from 'react'
import { Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage'
import ServicePage from "./pages/ServicePage";
const App = () => {
  return (
   <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/services/:slug" element={<ServicePage />} />
      <Route path="*" element={<div className="p-8">Not Found</div>} />
    </Routes>
  )
}

export default App

