import { useState } from "react";
import Body from "./pages/Body";
import GitHub from './pages/GitHub'

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Body></Body>}></Route>
        <Route path="/GitHub" element={<GitHub></GitHub>}></Route>
      </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
