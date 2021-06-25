import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
 import DialogContent from '@material-ui/core/DialogContent';
  import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
  import Input from '@material-ui/core/Input';
  import axios from 'axios';
  import  { useState } from 'react';
 import FormControl from '@material-ui/core/FormControl';
const useStyles = makeStyles((theme) => ({
    file: {
      background:"#DF9433",
      marginRight:"5px",
      height: 32,
      fontWeight:900,
  
      margin:"5px",
     fontSize:14
       },  
       formControl: {
        margin: theme.spacing(1),
                  minWidth: 220,
                  fontSize:25
      },
       filee: {
        background:"#84b13cb2",
        marginRight:"5px",
        height: 32,
        fontWeight:900,
  
        margin:"2px",
       fontSize:14
         },  
         fileee: {
          background:"#ebaf607e",
          marginRight:"5px",
          height: 32,
           fontWeight:900,
          margin:"2px",
         fontSize:14
           }, 
           insert_classss:{
            background:"#aee75198",
             height: 37,
            fontWeight:900,
            direction:"rtl",
            width: 155,
             marginTop:"9px",
             marginRight:"10px",

           fontSize:14
           },
           insert_classs:{
            background:"#aee75198",
             height: 37,
            fontWeight:900,
            direction:"rtl",
            width: 155,
             marginTop:"9px",
             marginRight:"32px",

           fontSize:14
           }
    }));
var teachers = [{ name: " Mai sami jaber  ", name_en:"mai sami jaber",id:"المرحلة الابتدائية",
id:"المرحلة الابتدائية",date:"المرحلة الابتدائية",id_job:"المرحلة الابتدائية",password:"المرحلة الابتدائية",phone:"المرحلة الابتدائية"

,password:"6565t434 ",phone:"434564565 ",Addrees:"6565t434 ",Material:"434564565 ",gender:"434564565 "

 },
 { name: " Mai sami jaber  ", name_en:"mai sami jaber",id:"المرحلة الابتدائية",
 id:"المرحلة الابتدائية",date:"المرحلة الابتدائية",id_job:"المرحلة الابتدائية",password:"المرحلة الابتدائية",phone:"المرحلة الابتدائية"
 
 ,password:"6565t434 ",phone:"434564565 ",Addrees:"6565t434 ",Material:"434564565 ",gender:"434564565 "
 
  },
  { name: " Mai sami jaber  ", name_en:"mai sami jaber",id:"المرحلة الابتدائية",
id:"المرحلة الابتدائية",date:"المرحلة الابتدائية",id_job:"المرحلة الابتدائية",password:"المرحلة الابتدائية",phone:"المرحلة الابتدائية"

,password:"6565t434 ",phone:"434564565 ",Addrees:"6565t434 ",Material:"434564565 ",gender:"434564565 "

 },
 { name: " Mai sami jaber  ", name_en:"mai sami jaber",id:"المرحلة الابتدائية",
id:"المرحلة الابتدائية",date:"المرحلة الابتدائية",id_job:"المرحلة الابتدائية",password:"المرحلة الابتدائية",phone:"المرحلة الابتدائية"

,password:"6565t434 ",phone:"434564565 ",Addrees:"6565t434 ",Material:"434564565 ",gender:"434564565 "

 },
 { name: " Mai sami jaber  ", name_en:"mai sami jaber",id:"المرحلة الابتدائية",
id:"المرحلة الابتدائية",date:"المرحلة الابتدائية",id_job:"المرحلة الابتدائية",password:"المرحلة الابتدائية",phone:"المرحلة الابتدائية"

,password:"6565t434 ",phone:"434564565 ",Addrees:"6565t434 ",Material:"434564565 ",gender:"434564565 "

 },
 ,
 { name: " Mai sami jaber  ", name_en:"mai sami jaber",id:"المرحلة الابتدائية",
id:"المرحلة الابتدائية",date:"المرحلة الابتدائية",id_job:"المرحلة الابتدائية",password:"المرحلة الابتدائية",phone:"المرحلة الابتدائية"

,password:"6565t434 ",phone:"434564565 ",Addrees:"6565t434 ",Material:"434564565 ",gender:"434564565 "

 },
 { name: " Mai sami jaber  ", name_en:"mai sami jaber",id:"المرحلة الابتدائية",
id:"المرحلة الابتدائية",date:"المرحلة الابتدائية",id_job:"المرحلة الابتدائية",password:"المرحلة الابتدائية",phone:"المرحلة الابتدائية"

,password:"6565t434 ",phone:"434564565 ",Addrees:"6565t434 ",Material:"434564565 ",gender:"434564565 "

 },
 { name: " Mai sami jaber  ", name_en:"mai sami jaber",id:"المرحلة الابتدائية",
id:"المرحلة الابتدائية",date:"المرحلة الابتدائية",id_job:"المرحلة الابتدائية",password:"المرحلة الابتدائية",phone:"المرحلة الابتدائية"

,password:"6565t434 ",phone:"434564565 ",Addrees:"6565t434 ",Material:"434564565 ",gender:"434564565 "

 },
 { name: " Mai sami jaber  ", name_en:"mai sami jaber",id:"المرحلة الابتدائية",
 date:"المرحلة الابتدائية",id_job:"المرحلة الابتدائية",password:"المرحلة الابتدائية",phone:"المرحلة الابتدائية"

,password:"6565t434 ",phone:"434564565 ",Addrees:"6565t434 ",Material:"434564565 ",gender:"434564565 "

 },

];

function TeacherManger() {
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = useStyles();

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClickOpen1 = () => {
        setOpen1(true);
      };
    
   
    
      const handleClose1 = () => {
        setOpen1(false);
      };
    
    const handleClose = () => {
      setOpen(false);
    }
    return (
        <div>
                <div className="Class_alls">
          <div  className="Class_alls_under"  >
           <Button  className={classes.insert_classss}  color="black" onClick={handleClickOpen1}>
                      اضافة معلم   </Button>
                      <Button  className={classes.insert_classs}  color="black" onClick={handleClickOpen}>
                       اضافة معلم عبر ملف   </Button>
 
          </div>
        <table class="table">
            
            <thead>
                <tr className="rwos">
                    <th className="tht " >اسم المعلم</th>
                    <th className="tht " >الاسم بالانجليزية </th>

                    <th className="tht ">رقم الهوية   </th>
                    <th className="tht " >تاريخ الميلاد </th>
                    <th className="tht " >الرقم الوظيفي </th>
                    <th className="tht " > كلمة المرور</th>
                    <th className="tht " >رقم الهاتف </th>
                    <th className="tht " >المواد الدراسية </th>
                      <th className="tht " >العنوان </th>
                     <th className="tht ">الجنس </th>
                    <th className="tht ">العمليات 
                    
                       </th>

                </tr>
            </thead>
            <tbody>
            {teachers.map((teacher) => (
                <tr className="rwo1">
                    <td className="thss " >{teacher.name}  </td>
                   <td className="thss ">{teacher.name_en}</td>
                    <td className="thss " >{teacher.id}</td>
                    <td className="thss " >{teacher.date}</td>
                    <td className="thss " >{teacher.id_job}</td>
                    <td className="thss " >{teacher.password}</td>
                    <td className="thss " >{teacher.phone}</td>
                    <td className="thss " >{teacher.Material}</td>
                    <td className="thss " >{teacher.Addrees}</td>
                    <td className="thss " >{teacher.gender}</td>
   
                    <td>
                                <button class="button2">تعديل</button>
<button class="button3">حذف</button>

                                 </td>
                </tr>
                ))}

            </tbody>

        </table>
        <Dialog
          fullScreen={fullScreen}
          open={open1}
          onClose={handleClose1}
          aria-labelledby="responsive-dialog-title"
        >
          
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
        <input className="class" placeholder=" اسم المعلم باللغة الانجليزية " />
      
          <input className="class" placeholder="اسم المعلم" />
         

          
        <input  type="number"  className="class" placeholder="رقم الهاتف " />
        <input className="class" placeholder="رقم هوية المعلم" />
          
      
           
        <input className="class" placeholder="العنوان" />
        <select className="boxes333">
          <option className="boxes333" value="">
            {" "}
            الجنس {" "}
          </option>
          <option className="opt"> ذكر   </option>
          <option className="opt"> انثى   </option>
          
      
        </select>
        <input  type="date"  className="class" placeholder="تاريخ الميلاد" />
        <input className="class" placeholder="الرقم الوظيفي" />

        <input className="class" placeholder="كلمة المرور  " />
       

  
 
   
            <br />
            <button onClick={handleClose1} className="inserts">إضافة</button>
           
        </div>
      </div>
    </div>
           <div className="div_class">
            <button autoFocus onClick={handleClose1}  className="diiialo_class"  color="primary">
الغاء            </button>
            <button onClick={handleClose1}  className="diialo_class"  color="primary" autoFocus>
              اضافة
            </button>
          </div>
         </Dialog>
         <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <span className="sp">  قم باختيار ملف   </span>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
            <Input type="file" />
              </FormControl>
          </form>
        </DialogContent>
        <div  className="buttons_row" > 

           <button onClick={handleClose} className="diiiallo"  >
الغاء          </button>
          <button onClick={handleClickOpen} className="diiallo"    >
            اضافة
          </button>
          </div>

       </Dialog>
      </div>
      </div>
    )
}

export default TeacherManger
