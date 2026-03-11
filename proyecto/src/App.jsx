import './App.css'
import HomeHooks from './playground/HomeHooks'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseState from './playground/useState';

function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeHooks />} />
        <Route path="/useState" element={<UseState/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
