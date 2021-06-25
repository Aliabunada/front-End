import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
 import DialogContent from '@material-ui/core/DialogContent';
  import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
 
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

           insert_classs:{
            background:"#aee75198",
            marginRight:"33px",
            height: 37,
            fontWeight:900,
            direction:"rtl",
            width: 155,
             marginTop:"9px",
           fontSize:14
           }
    }));
var classs = [{ name_class: " الصف الثاني", bran:"B",name_level:"المرحلة الاعدادية", password:"1234" },
{ name_class: " الصف الثاني", bran:"B",name_level:"المرحلة الاعدادية", password:"1234" },
{ name_class: " الصف الثاني", bran:"B",name_level:"المرحلة الاعدادية", password:"1234" },
{ name_class: " الصف الثاني", bran:"B",name_level:"المرحلة الاعدادية", password:"1234" },
{ name_class: " الصف الثاني", bran:"B",name_level:"المرحلة الاعدادية"  },
{ name_class: " الصف الثاني", bran:"B",name_level:"المرحلة الاعدادية"  },
{ name_class: " الصف الثاني", bran:"B",name_level:"المرحلة الاعدادية"  },
{ name_class: " الصف الثاني", bran:"B",name_level:"المرحلة الاعدادية"  },
{ name_class: " الصف الثاني", bran:"B",name_level:"المرحلة الاعدادية"  },
{ name_class: " الصف الثاني", bran:"B",name_level:"المرحلة الاعدادية"  },

{ name_class: " الصف الثاني", bran:"B",name_level:"المرحلة الاعدادية"  },
{ name_class: " الصف الثاني", bran:"B",name_level:"المرحلة الاعدادية"  },


 
];
function Class() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = useStyles();

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    }
    return (
       <div className="Class_alls">
          <div  className="Class_alls_under"  >
           <Button  className={classes.insert_classs}  color="black" onClick={handleClickOpen}>
                      اضافة صف   </Button>
 
          </div>
        <table class="table">
            
            <thead>
                <tr className="rwos">
                    <th className="th " >اسم الصف</th>
                    <th className="th ">الشعبة   </th>
                    <th className="th ">اسم المرحلة</th>
                    <th className="th ">العمليات 
                     </th>

                </tr>
            </thead>
            <tbody>
            {classs.map((classs) => (
                <tr className="rwo1">

                    <td className="thss "> <a  href="/in_class ">{classs.name_class}</a></td> 
                   <td className="thss ">{classs.bran}</td>
                    <td className="thss " >{classs.name_level}</td>
                    <td>
                  <button class="button3">حذف</button>

                                <button class="button2">تعديل</button>
 
                                 </td>
                </tr>
                ))}

            </tbody>

        </table>
           <div>
            
           <Dialog
             fullScreen={fullScreen}
             open={open}
             onClose={handleClose}
             aria-labelledby="responsive-dialog-title"
           >
       <span className="sp">  اضافة صفوف دراسية   </span>
             <DialogContent    > 
               <div className="div_class">
                <select className="slectt" type="text"  placeholder= " اسم الصف"  required  >
                 <option className="opt">اسم  الصف</option>
                 <option className="opt">المرحلة الابتدائية</option>
                 <option className="opt">المرحلة الاعدادية</option>
   
                </select>
 
                <select className="slectt" type="text"  placeholder= " الشعبة "  required  >
                 <option className="opt">الشعبة  </option>
                 <option className="opt">المرحلة الابتدائية</option>
                 <option className="opt">المرحلة الاعدادية</option>
   
                </select>
               <select className="slectt" type="text"  placeholder= " اسم المرحلة"  required  >
                 <option className="opt">اسم المرحلة</option>
                 <option className="opt">المرحلة الابتدائية</option>
                 <option className="opt">المرحلة الاعدادية</option>
   
                </select>

                <input id="myTextss" type="password" placeholder="كلمة المرور"  />
 
                </div>
             </DialogContent>
             <div className="div_class">
               <button autoFocus onClick={handleClose}  className="diiialo_class"  color="primary">
   الغاء            </button>
               <button onClick={handleClose}  className="diialo_class"  color="primary" autoFocus>
                 اضافة
               </button>
             </div>
            </Dialog>
         </div>
         </div>
    )
}

export default Class
