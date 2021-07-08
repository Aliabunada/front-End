import React from 'react'
import   './Insert_school.css'
import { useState } from "react";
import axios from 'axios';

function InsertSchool() {
  const [values, setValues] =useState({
    managerId: '',
    managerName: '',
    managerName_en: '',
    date:'',
    gender:'',
    email:'',
    job_Number: '',
    address: '',
    phone_number : '',
    password: '',
    school_Name : '',
    ministry : '',

  });

  function sendData () {    
    
    axios.post('http://localhost:9000/signup',values)
    .then(function (response) {
      console.log(response);
      window.location.replace('/manger')
    })
    .catch(error => {        
      if(error.response) { 
        /* the request was made and the server responded
        with a status code that falls out of the range of 2xx */
        alert(error.response.data)
        
      }
    });
  }
  

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
    // console.log(event.target.value,'this is the value in handle change')
  };
  
    return (
<div> 
<div className="InsertSchool">
      <div className="form">
        <div className="text_std">
        <span>إضافة مدرسة جديدة</span>
         </div>
        <div className="line_leftt"></div>
        <div className="line_leftts"></div>
        <div>
          <hr className="lines_titles" />
        </div>
        <div className="forms_inputt">
                                  
            
    <input className="class"  type="number"  onChange={handleChange('managerId')} placeholder="رقم هوية المدير" />
    <input className="class"type="text"   onChange={handleChange('managerName_en')} placeholder=" اسم المدير باللغة الانجليزية " />
    <input className="class" type="text"  onChange={handleChange('managerName')} placeholder="اسم المدير" />
    <input className="class" type="text"  onChange={handleChange('ministry')} placeholder="المديرية" />

     <input className="class" type="number"  onChange={handleChange('job_Number')} placeholder="الرقم الوظيفي" />
        <input className="class"  onChange={handleChange('email')} placeholder="البريد الالكتروني" />
                   
        <input className="class"  type="text"  onChange={handleChange('address')} placeholder="العنوان" />
        <input  type="number" onChange={handleChange('phone_number')} className="class" placeholder="رقم الهاتف " />
         <input  type="date"  className="class" onChange={handleChange('date')} placeholder="تاريخ الميلاد" />
                 
         <select className="boxes333" onChange={handleChange('gender')}>
          <option className="boxes333" value="">
            {" "}
            الجنس {" "}
          </option>
          <option className="opt"> ذكر   </option>
          <option className="opt"> انثى   </option>
          
      
        </select>
         <input className="class" type="text"  onChange={handleChange('school_Name')} placeholder="اسم المدرسة " />
            <input className="class" type="password"  onChange={handleChange('password')}  placeholder="كلمة المرور" />
           <br />
            <button className="inserts_InsertSchool" onClick={sendData}>إضافة</button>

      </div>
      
          
            </div>
        </div>
        </div>
    )
}

export default InsertSchool



 
