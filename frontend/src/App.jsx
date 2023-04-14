// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Iss from "./pages/ISS";

import "./App.css";

function App() {
  // const [page, setPage] = useState(1);
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ISS" element={<Iss />} />
      </Routes>
    </div>
  );
}

export default App;
