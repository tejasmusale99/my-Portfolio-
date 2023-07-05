import React from "react";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import { Routes, Route,Navigate } from "react-router-dom";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Projects from "./Components/Projects";
import Blogs from "./Components/Blogs";


function App() {
  return (
    <div className="App">
      <div className="container app_container">
        <div className="row app_row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9 app_main-content">
            <Navbar />
            <Routes>
              <Route path="/" element={<About />}></Route>
              <Route path="/resume" element={<Resume />}></Route>
              <Route path="/projects" element={<Projects />}></Route>
              <Route path="/blogs" element={<Blogs />}></Route>
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
