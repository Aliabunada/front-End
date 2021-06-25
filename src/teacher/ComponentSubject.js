import React from 'react'
import { Link } from "react-router-dom";
const data_subject=[{name:"  اللغة العربية ",image:"en.jpg"},
{name:"   اللغة الانجليزية ",image:"en.jpg" ,},{name:"   اللغة الانجليزية ",image:"en.jpg" ,}]
function ComponentSubject({title,image }) {
    return (
      
        <div> 
        {data_subject.map((data) => (
        <div className="component">
            <img src={data.image} />
            <Link to="/Material" className="header_link">
            <div  >
            <p className="header-optss">{data.name}</p>
            </div>
            </Link>
           
               
        </div>
          ))} 
             
          </div>  
    )
}

export default ComponentSubject
