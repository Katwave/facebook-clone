import React from "react";
import PostData from "./components/PostData";
import SideBars from "./components/SideBars";
import Nav from "./components/Nav";
import "./css/style.css";
import "./css/font-awesome-4.7.0/css/font-awesome.min.css";

const App = () => {
  return (
    <div>
      <Nav />
      <div className="container">
        <SideBars />
        <PostData />
      </div>
    </div>
  );
};

export default App;
