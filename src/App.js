import react from "react";
import "./index.css";
import About from "./Routes/About";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Project from "./Routes/Project";
import {Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
