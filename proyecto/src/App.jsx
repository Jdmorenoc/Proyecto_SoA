import './App.css'
import HomeHooks from './playground/HomeHooks'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseState from './playground/useState';
import UseDebugValue from './playground/UseDebugValue';

function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeHooks />} />
        <Route path="/useState" element={<UseState/>} />
        <Route path="/useDebugValue" element={<UseDebugValue/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
