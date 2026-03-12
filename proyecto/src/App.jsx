import './App.css'
import HomeHooks from './playground/HomeHooks'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseState from './playground/useState';
import UseDebugValue from './playground/UseDebugValue';
import UseMemo from './playground/UseMemo';

function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeHooks />} />
        <Route path="/useState" element={<UseState/>} />
        <Route path="/useDebugValue" element={<UseDebugValue/>} />
        <Route path="/useMemo" element={<UseMemo/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
