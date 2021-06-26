import React from "react";
import   "./Home.css";
import Component from "./Component";

function Home() {
  return (
    <div className="home">
      <div className="text_homees">
        <span>المواد الدراسية </span>
      </div>
      
      <div className="home_row">
        <Component />
         <Component />
        <Component />
      </div> 
    
    </div>
  );
}
export default Home;
