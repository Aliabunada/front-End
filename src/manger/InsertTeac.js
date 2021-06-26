import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import  { useState } from 'react';
function InsertTeac() {
  const [values, setValues] =useState({
    teacherId: '',
    teacherName: '',
    teacherName_en: '',
    date:'',
    gender:'',
     job_Number: '',
    address: '',
    phone_number : '',
  

  });
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
    // console.log(event.target.value,'this is the value in handle change')
  };
 
    return (
        <div className="insert_std">
      <div className="form">
        <div className="text_std">
          <span>اضافة المعلمين للصوف الدراسية</span>
        </div>
        <div className="line_leftt"></div>
        <div className="line_leftts"></div>
        <div>
          <hr className="line_titles" />
        </div>
        <div className="form_inputt">
          
                   
        <select className="boxes333">
          <option className="boxes333" value="">
            {" "}
            المواد الدراسية{" "}
          </option>
          <option className="opt"> اللغة العربية  </option>
          <option className="opt"> اللغة العربية  </option>
          <option className="opt"> اللغة العربية  </option>
          <option className="opt"> اللغة العربية  </option>
      
        </select>
        <input className="class"  onChange={handleChange('teacherName_en')} placeholder=" اسم المعلم باللغة الانجليزية " />
      
          <input className="class"  onChange={handleChange('teacherName')} placeholder="اسم المعلم" />
         

          
        <input  type="number"  onChange={handleChange('phone_number')}  className="class" placeholder="رقم الهاتف " />
        <input className="class"  onChange={handleChange('teacherId')}  placeholder="رقم هوية المعلم" />
          
      
           
        <input className="class"  onChange={handleChange('address')} placeholder="العنوان" />
        <select className="boxes333">
          <option className="boxes333" value="">
            {" "}
            الجنس {" "}
          </option>
          <option className="opt"> ذكر   </option>
          <option className="opt"> انثى   </option>
          
      
        </select>
        <input  type="date"   onChange={handleChange('date')} className="class" placeholder="تاريخ الميلاد" />
        <input className="class"  onChange={handleChange('job_Number')} placeholder="الرقم الوظيفي" />

 
  
 
   
           <Link to="/in_class">
           <br />
            <button onClick={()=>{
                axios.post('http://localhost:9000/hi',values)
   .then(res => console.log(res.data));
           }} className="inserts">إضافة</button>
          </Link>
          
        </div>
      </div>
    </div>
    )
}

export default InsertTeac
