import React from 'react'
import ComponentSubject from "./ComponentSubject";

function SubjectsCalass() {
    return (
   
      <div className="homed">
      <div className="text_homees">
        <span>المواد الدراسية </span>
      </div>
 
      <div className="home_row">
        <ComponentSubject />
        <ComponentSubject />
        <ComponentSubject />
        <ComponentSubject />
      </div> 
       
    </div>
    )
}

export default SubjectsCalass
