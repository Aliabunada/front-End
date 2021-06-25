import React from 'react'
import Components from './Component.css'
import { Link } from 'react-router-dom';
 
var data_Parent=[{name:" اللغة العربية ",vaule:70,image:"en.jpg",},
{name:" اللغة العربية ",vaule:70,image:"en.jpg",},
{name:" اللغة العربية ",vaule:70,image:"en.jpg",},
{name:" اللغة العربية ",vaule:40,image:"en.jpg",}]

function Component() {
    return (
        
        <div> 
        {data_Parent.map((data) => (
        <div className="component">
            <img src={data.image} />
            <Link to="/Material_std" className="header_link">
            <div  >
            <p className="header-opt">{data.name}</p>
            </div>
            </Link>
            <progress className="proo" max="100" value= {data.vaule} ></progress>
               
        </div>
          ))} 
             
          </div>   
    )
}

export default Component
