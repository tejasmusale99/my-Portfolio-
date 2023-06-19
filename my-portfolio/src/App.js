import React from "react";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
           <Sidebar />
          </div>
          <div className="col-lg-9 app_main-content">
           <Navbar />
           </div>
        </div>
      </div>
    </div>
  );
}

export default App;
