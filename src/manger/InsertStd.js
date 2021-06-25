import React from "react";
import Insert_stds from "./Insert_std.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import  { useState } from 'react';
function InsertStd() {

  const [values, setValues] =useState({
    StudentId: '',
    StudentName: '',
    studentName_en: '',
    date:'',
    gender:'',
     address: '',
    phone_number : '',
     

  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
    // console.log(event.target.value,'this is the value in handle change')
  };
  function testconnect () {
    axios.post('http://localhost:9000/hi',values)
    .then(res => console.log(res.data));
  }
  return (


    <div className="insert_std">
      <div className="form">
        <div className="text_std">
          <span>اضافة الطلاب للصوف الدراسية</span>
        </div>
        <div className="line_leftt"></div>
        <div className="line_leftts"></div>
        <div>
          <hr className="line_titles" />
        </div>
        <div className="form_input">
          
                   
        <select className="boxes333">
          <option className="boxes333" value="">
            {" "}
            االصف{" "}
          </option>
          <option className="opt">الصف السابع</option>
          <option className="opt">الصف السابع</option>
          <option className="opt">الصف السابع</option>
          <option className="opt">الصف السابع</option>
      
        </select>
        <input className="class" onChange={handleChange('studentName_en')} placeholder=" اسم الطالب باللغة الانجليزية " />
      
          <input className="class" onChange={handleChange('StudentName')} placeholder="اسم الطالب" />
         

          <select className="boxes33">
          <option className="boxes33" value="">
            {" "}
            المرحلة{" "}
          </option>
          <option className="opt">الاعدادية</option>
          <option className="opt">الابتدائية</option>  
            <option className="opt">علمي</option>
          <option className="opt">ادبي</option>
          <option className="opt">شرعي</option>
          <option className="opt">صناعة</option>
      
        </select> 
        <input    className="class" onChange={handleChange('phone_number')} placeholder="رقم الهاتف " />
        <input className="class" onChange={handleChange('StudentId')} placeholder="رقم هوية الطالب" />
          
        <select className="boxes33">
          <option className="boxes33" value="">
            {" "}
            االشعبةة{" "}
          </option>
          <option className="opt">1</option>
          <option className="opt">2</option>
          <option className="opt">3</option>
          <option className="opt">4</option>
          <option className="opt">5</option>
          <option className="opt">6</option>
          <option className="opt">7</option>
          </select> 
                   <input className="class" onChange={handleChange('address')} placeholder="العنوان" />
 
 <input  type="date" onChange={handleChange('date')} className="class" placeholder="تاريخ الميلاد" />
  
 <select className="boxes333" onChange={handleChange('gender')}>
          <option className="boxes333" value="">
            {" "}
            الجنس {" "}
          </option>
          <option className="opt"> ذكر   </option>
          <option className="opt"> انثى   </option>
          
      
        </select>
        <input className="class" type="password"  onChange={handleChange('password')}  placeholder="كلمة المرور" />

   <input className="class" onChange={handleChange('gender')} placeholder=" " />

           <Link to="/in_class">
           <br />
            <button className="inserts">إضافة</button>
          </Link>
          
        </div>
      </div>
    </div>
  );
}
export default InsertStd;
