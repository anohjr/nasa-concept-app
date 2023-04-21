// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Iss from "./pages/ISS";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  // const [page, setPage] = useState(1);
  return (
    <div className="App">
      <Home />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/iss" element={<Iss />} />
        <Route path="/solar-system" element={<Iss />} />
        <Route path="/gallery" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
