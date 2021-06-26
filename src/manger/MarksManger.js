import React from 'react'
import { Link } from 'react-router-dom';
import   './Marks_manger.css'

function MarksManger() {
    return (
  <div className="insert_teacher">
          <div className="ins_form">

 
        <div className="ins_title">
          <span>استكشاف علامات للطلاب</span>
        </div>
        
        <div>
          <hr className="line_title" />
        </div>
        <div className="vertical1"></div>
        <div className="vertical2"></div>
        <div className="ins_box">

           <input placeholder="اسم الطالب رباعي" className="boxes_marks" />
          <br />
          <br />


          <select className="boxes_marks">
          <option className="boxes_marks" value="">
            {" "}
            المرحلة{" "}
          </option>
          <option className="opt">الاعدادية</option>
          <option className="opt">الابتدائية</option>  
            <option className="opt">علمي</option>
          <option className="opt">ادبي</option>
          <option className="opt">شرعي</option>
          <option className="opt">صناعة</option>
      
        </select>           <br />
          <br />

 
          <select className="boxes_marks">
          <option className="boxes_marks" value="">
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
                     <br />
          <br />
          <select className="boxes_marks">
          <option className="boxes_marks" value="">
            {" "}
            االصف{" "}
          </option>
          <option className="opt">الصف السابع</option>
          <option className="opt">الصف السابع</option>
          <option className="opt">الصف السابع</option>
          <option className="opt">الصف السابع</option>
      
        </select>          <br />
 
          <Link to="/">
          <button className="sendss">بحث</button>

           </Link>
        </div>
              </div>

 
      </div>
     )
}

export default MarksManger
