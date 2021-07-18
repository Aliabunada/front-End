import React from "react";
import   "./Insert_std.css";
// import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
// import { Grade } from "@material-ui/icons";

function InsertStd() {
 
  var branches = ['1','2','3','4','5','6','7','8','9','10','11','12']

  const [isBusy, setBusy] = useState(true)
  const [classesName, setClassesName] = useState([]);
  const [grades, setgrades] = useState([]);
 
  const [values, setValues] =useState({
    StudentId: '',
    StudentName: '',
    studentName_en: '',
    dateOfBirth:'',
    gender:'',
     address: '',
    phone_number : '',
    parentName:'',
    Job:"",
    parentIdentification_number:"",
    level : '',
    grade:'',
    branch:''

  });
  
  useEffect(() => {

         axios.get('http://localhost:9000/classes/getClassesName')
          .then(async function (classesName) {
            setClassesName(classesName.data.classes)
            setgrades(classesName.data.Grades)
            setBusy(false);
          }).catch((err) => {
        console.log('err');
      })
      
  }, [])


  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
    // console.log(event.target.value,'this is the value in handle change')
  };
  
  function addOneStudent(){
    axios.post('http://localhost:9000/students/createOne',values)
    .then(function (doc) {
      alert('Done')
      window.location.replace(`/in_class/${values.level}/${values.branch}`)
      console.log(doc)
    }).catch(error => {
      console.log(error)
      if (error.response) {
        /* the request was made and the server responded
        with a status code that falls out of the range of 2xx */
        alert(error.response.data)

      }
    });
  }
 
  
  return (


    <div className="insert_std">
      {!isBusy ? (
      <div className="form">
        <div className="text_std">
          <span>اضافة طالب الى الصف الدراسية</span>
        </div>
        <div className="line_leftt"></div>
        <div className="line_leftts"></div>
        <div>
          <hr className="line_titles" />
        </div>
        <div className="form_input">
          
                   
        <select className="boxes333" onChange={handleChange('level')}>
        <option className="opt" selected disabled>اسم الصف</option>
                {classesName ? classesName.map(className => (
                  <option className="opt" value={className}  >{className}</option>
                )) : (<option className="opt">اسم  الصف</option>)
                }
        </select>
        <input className="class" onChange={handleChange('studentName_en')} placeholder=" اسم الطالب باللغة الانجليزية " />
      
          <input className="class" onChange={handleChange('StudentName')} placeholder="اسم الطالب" />

          <input className="class" onChange={handleChange('parentName')} placeholder="اسم ولي امر الطالب" />

          <input className="class" onChange={handleChange('Job')} placeholder=" مهنة الاب" />

          <input className="class" onChange={handleChange('parentIdentification_number')} placeholder=" رقم هوية ولي الامر" />



          <select className="boxes33" onChange={handleChange('grade')}>
          <option className="opt" selected disabled  >اسم المرحلة</option>
                {grades ? grades.map(grade => (
                  <option className="opt" value={grade}  >{grade}</option>
                )) : ( <option className="opt" selected disabled>اسم المرحلة</option>
                )
                }
      
        </select> 
        <input    className="class" onChange={handleChange('phone_number')} placeholder="رقم الهاتف " />
        <input className="class" onChange={handleChange('StudentId')} placeholder="رقم هوية الطالب" />
          
        <select className="boxes33" onChange={handleChange('branch')}>
        <option className="opt" selected disabled >الشعبة</option>
                {branches ? branches.map(branch => (
                  <option className="opt" value={branch}  >{branch}</option>
                )) : (<option className="opt">الشعبة</option>)
                }
          </select> 
                   <input className="class" onChange={handleChange('address')} placeholder="العنوان" />
 
 <input  type="date" onChange={handleChange('dateOfBirth')} className="class" placeholder="تاريخ الميلاد" />
  
 <select className="boxes333" onChange={handleChange('gender')}>
          <option className="boxes333" value="">
            {" "}
            الجنس {" "}
          </option>
          <option className="opt"> ذكر   </option>
          <option className="opt"> انثى   </option>
          
      
        </select>
        <input className="class" type="password"  onChange={handleChange('password')}  placeholder="كلمة المرور" />


           {/* <Link to="/in_class"> */}
           <br />
            <button className="inserts" onClick={addOneStudent}>إضافة</button>
          {/* </Link> */}
          
        </div>
      </div>
      ):(<h1>Looding ..</h1>)}
    </div>
  );
}
export default InsertStd;
