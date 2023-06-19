import React from "react";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
           <Sidebar />
          </div>
          <div className="col-lg-9 app_main-content">main</div>
        </div>
      </div>
    </div>
  );
}

export default App;
