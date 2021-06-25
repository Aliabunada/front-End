import React from "react";
import ComponentTeacher from "./ComponentTeacher";

function MainTeacher() {
  return (
    <div className="home">
    <div className="text_homees">
      <span>الفصول الدراسية </span>
    </div>
    {/*product id,title,price,rating,img */}
    {/*product */}
    <div className="home_row">
      <ComponentTeacher />
      <ComponentTeacher />
      <ComponentTeacher />
    </div> 
     
  </div>
  );
}

export default MainTeacher;
