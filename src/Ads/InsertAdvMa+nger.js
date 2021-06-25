import React from 'react'
import { Link } from "react-router-dom";
import Insert_adv_mangers from "./Insert_adv_manger.css";

function InsertAdvManger() {
    return (
      <div className="insert_teacher">

        <div className="ins_form">
        <div className="ins_title">
          <span>إضافة إعلان جديد</span>
          
          <div> 
            <hr className="line_title" />
          </div>
          <div className="vertical1"></div>
          <div className="vertical2"></div>
        </div>
        <div className="ins_box_adc">
        <select className="boxes_marks_adv">
          <option  className="boxes_marks_adv" value="">
            {" "}
            اسم الصف{" "}
          </option>
          <option value="السابع"  className="opt">الصف السابع</option>
          <option value="السابع"  className="opt">الصف السابع</option>
          <option value="السابع"  className="opt">الصف السابع</option>
          <option value="السابع"  className="opt">الصف السابع</option>
      
        </select> 

                <br />
               <br />

               <select className="boxes_marks_adv" >
          <option className="boxes_marks_adv" value="">
            {" "}
            الشعبة{" "}
          </option>
          <option  value="1" className="opt">1</option>
          <option  value="2"  className="opt">2</option>
          <option  value="3" className="opt">3</option>
          <option  value="4" className="opt">4</option>
          <option  value="5" className="opt">5</option>
          <option  value="6" className="opt">6</option>
          <option  value="7" className="opt">7</option>
               
        </select>                 <br />
                              <br />

                              <select className="boxes_marks_adv"  >
          <option className="boxes_marks_adv" value="">
            {" "}
            المرحلة{" "}
            </option>
            
            <option  value="الاعدادية" className="opt">الاعدادية</option>
          <option  value="الابتدائية"  className="opt">الابتدائية</option>  
            <option  value="علمي"  className="opt">علمي</option>
          <option  value="ادبي" className="opt">ادبي</option>
          <option  value="شرعي"  className="opt">شرعي</option>
          <option  value="صناعة"  className="opt">صناعة</option>
          </select>                <br />
                
            
        </div>
        <div className="text_filedv_manger">
  <textarea placeholder="اكتب شيئاا" className="filedv_manger" />
        </div>
        <div className="shareev_manger"> 
        <Link to="/">
              <button className="sharev_manger">نشر</button>
            </Link>
            </div>
      </div>
      </div>

    )
}

export default InsertAdvManger
