import './App.css'
import HomeHooks from './playground/HomeHooks'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseStateExample from './playground/useState';
import UseDebugValueExample from './playground/UseDebugValue';
import UseMemoExample from './playground/UseMemo';
import UseDeferredValueExample from './playground/UseDeferredValue';
import UseEffectExample from './playground/UseEffect';
import UseActionStateExample from './playground/UseActionState';
import UseReducer from './playground/UseReducer';
import UseRef from './playground/UseRef';
import UseCallback from './playground/UseCallback';
import UseLayoutEffect from './playground/UseLayoutEffect';

function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeHooks />} />
        <Route path="/useState" element={<UseStateExample/>} />
        <Route path="/useDebugValue" element={<UseDebugValueExample/>} />
        <Route path="/useMemo" element={<UseMemoExample/>} />
        <Route path="/useDeferredValue" element={<UseDeferredValueExample/>} />
        <Route path="/useEffect" element={<UseEffectExample/>} />
        <Route path="/useActionState" element={<UseActionStateExample/>} />
        <Route path="/useReducer" element={<UseReducer/>} />
        <Route path="/useRef" element={<UseRef/>} />
        <Route path="/useCallback" element={<UseCallback/>} />
        <Route path="/useLayoutEffect" element={<UseLayoutEffect/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
