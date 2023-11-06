import React from "react";
import { Route, Routes } from "react-router-dom";
import Example1 from "./Example";
import ApplicationCenter from "./ApplicationCenter";
import Applist from "./Applist";
import "./Example.css";


function App1() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Example1 />} />
        <Route path="/ApplicationCenter" element={<ApplicationCenter />} />
        <Route path="/Applist" element={<Applist />} />
      </Routes>
    </div>
  );
}
export default App1;
