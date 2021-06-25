import React from "react";
import Logins from "./Login.css";
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import {useState} from 'react'

function Login() {
  const [id,setId] =useState('')
  const [pass,Password] =useState('')
  function hanlderId (e){
    setId(e.target.value)
                      
}
function hanlderPassword (e){
    Password(e.target.value)
                        
}
  return (
    <div className="login">
      <Grid> 
       <img className="image_login" src="image.jpg" />
       <p className="title_login">Online School Education Systems</p>
       <p> 
       <hr className="Line_login" />
       </p>
       </Grid >
       <Grid  className="text_login"> 
       <p className="texts_login">الصفحة الرئيسية</p>
       </Grid>
       <Grid  className="forms_login">
       <Grid class="Grid_text"> 
       <p class="c_login">تسجيل الدخول</p>
            <p className="c_login"> للبوابة الالكترونية</p>
            </Grid>
            <Grid>
            <Grid  className="alls"> 
            <img className="people_login" src="people.png" />
            <label id="peoples_login">أولياء الأمور</label>
            <br />
            <p className="prss_login">يتطلب الدخول باستخدام رقم هوية ولي أمر الطالب</p>
            </Grid>
            <br />
            <Grid className="part_2" >
            <img className="im_login" src="graduate.png" />
            <label id="student_login">الطلاب</label>
            <br />
            <Grid>
            <p className="pra_login">يتطلب الدخول باستخدام رقم هوية الطالب نفسه</p>
                </Grid>
            </Grid > 
            </Grid>
                <Grid  className="lines_login">
                  </Grid> 
                  <Grid className="upp_form" >
                  <input id="names_login" value={id} onChange={hanlderId} placeholder="رقم المستخدم"></input>
            <br />
            <input id="paworde_login" value={pass}  onChange={hanlderPassword} placeholder="كلمة المرور"></input>
            <br />
            <Link to="/">
              <button id="sent_login">دخول</button>
            </Link>
                  </Grid> 
       </Grid>
      </div>
  );
}
export default Login;
