import React from 'react'
import   './In_class.css'
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import DialogContent from '@material-ui/core/DialogContent';
import Input from '@material-ui/core/Input';
 import FormControl from '@material-ui/core/FormControl';
 import SearchIcon from '@material-ui/icons/Search';
 import Grid from '@material-ui/core/Grid';
 const rows = [{ name: " مي سامي عبد الرحيم جبر ", name_en: "Mai sami jaber", id: 53783748, bart:" 1999 / 1 / 18", classstd: { branch: "علمي", level: 5, class: " السابع "}, father_name: "Sami", phone: 5678999, gender: "انثى", address: "غزة" },
    { name: " مي سامي عبد الرحيم جبر ", name_en: "Mai sami jaber", id: 53783748, bart:" 1999 / 1 / 18", classstd: { branch: "علمي", level: 5, class: " السابع "}, father_name: "Sami", phone: 5678999, gender: "انثى", address: "غزة"  },
    { name: " مي سامي عبد الرحيم جبر ", name_en: "Mai sami jaber", id: 53783748, bart:" 1999 / 1 / 18", classstd: { branch: "علمي", level: 5, class: " السابع "}, father_name: "Sami", phone: 5678999, gender: "انثى", address: "غزة"  },
    { name: " مي سامي عبد الرحيم جبر ", name_en: "Mai sami jaber", id: 53783748,bart:" 1999 / 1 / 18", classstd: { branch: "علمي", level: 5, class: " السابع "}, father_name: "Sami", phone: 5678999, gender: "انثى", address: "غزة"  },
    { name: " مي سامي عبد الرحيم جبر ", name_en: "Mai sami jaber", id: 53783748, bart:" 1999 / 1 / 18", classstd: { branch: "علمي", level: 5, class: " السابع "}, father_name: "Sami", phone: 5678999, gender: "انثى", address: "غزة"  },
    { name: " مي سامي عبد الرحيم جبر ", name_en: "Mai sami jaber", id: 53783748,bart:" 1999 / 1 / 18", classstd: { branch: "علمي", level: 5, class: " السابع "}, father_name: "Sami", phone: 5678999, gender: "انثى", address: "غزة"  },
    { name: " مي سامي عبد الرحيم جبر ", name_en: "Mai sami jaber", id: 53783748, bart:" 1999 / 1 / 18", classstd: { branch: "علمي", level: 5, class: " السابع "}, father_name: "Sami", phone: 5678999, gender: "انثى", address: "غزة"  },
    { name: " مي سامي عبد الرحيم جبر ", name_en: "Mai sami jaber", id: 53783748, bart:" 1999 / 1 / 18", classstd: { branch: "علمي", level: 5, class: " السابع "}, father_name: "Sami", phone: 5678999, gender: "انثى", address: "غزة"  },
    { name: " مي سامي عبد الرحيم جبر ", name_en: "Mai sami jaber", id: 53783748,bart:" 1999 / 1 / 18", classstd: { branch: "علمي", level: 5, class: " السابع "}, father_name: "Sami", phone: 5678999, gender: "انثى", address: "غزة"  },
    { name: " مي سامي عبد الرحيم جبر ", name_en: "Mai sami jaber", id: 53783748, bart:" 1999 / 1 / 18", classstd: { branch: "علمي", level: 5, class: " السابع "}, father_name: "Sami", phone: 5678999, gender: "انثى", address: "غزة"  },
    { name: " مي سامي عبد الرحيم جبر ", name_en: "Mai sami jaber", id: 53783748, bart:" 1999 / 1 / 18", classstd: { branch: "علمي", level: 5, class: " السابع "}, father_name: "Sami", phone: 5678999, gender: "انثى", address: "غزة"  },
    { name: " مي سامي عبد الرحيم جبر ", name_en: "Mai sami jaber", id: 53783748, bart:" 1999 / 1 / 18", classstd: { branch: "علمي", level: 5, class: " السابع "}, father_name: "Sami", phone: 5678999, gender: "انثى", address: "غزة"  },
    { name: " مي سامي عبد الرحيم جبر ", name_en: "Mai sami jaber", id: 53783748,bart:" 1999 / 1 / 18", classstd: { branch: "علمي", level: 5, class: " السابع "}, father_name: "Sami", phone: 5678999, gender: "انثى", address: "غزة"  },
    { name: " مي سامي عبد الرحيم جبر ", name_en: "Mai sami jaber", id: 53783748, bart:" 1999 / 1 / 18", classstd: { branch: "علمي", level: 5, class: " السابع "}, father_name: "Sami", phone: 5678999, gender: "انثى", address: "غزة"  },
    { name: " مي سامي عبد الرحيم جبر ", name_en: "Mai sami jaber", id: 53783748, bart:" 1999 / 1 / 18", classstd: { branch: "علمي", level: 5, class: " السابع "} ,father_name: "Sami", phone: 5678999, gender: "انثى", address: "غزة"  },
    ];
   
    const useStyles = makeStyles((theme) => ({
        container: {
          display: 'flex',
              flexWrap: 'wrap',
        },
        file:{
            marginRight:"12px",
            marginLeft:"12px",
 background:"#DF9433",
fontSize:14,
fontWeight: '600',
        },
       
        formControl: {
          margin: theme.spacing(1),
                    minWidth: 420,
        },
        
        ins:{
            background:"#273cf581",
            marginRight:"12px",
            fontSize:14,
           fontWeight: '600',


        },
        
        standard:{
          width: 120,
          fontSize:18
          
        },
       
        
        
      }));
function InnClass() {
 
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
   
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
        return (
            <div>
            <Grid className="divs" >
            <Grid>
              
      <Button  className={classes.file} onClick={handleClickOpen}> اضافة عبر ملف      </Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <span className="sp">  قم باختيار ملف   </span>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
            <Input type="file" />
            <input id="myTextss" type="password" placeholder="كلمة المرور"  />

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
          </Grid>
           <Link to="/insert_std" className="Liks_ins">
             <Button  className={classes.ins}>اضافة طالب</Button>
                </Link>
              
              
                <div className="searchs">  
<input label="Search" className="standard-basic" placeholder="بحث" type="search"/>
<SearchIcon />
</div>
         </Grid>
        <table class="tables" >
            <thead>
                <tr className="bars">
                <th className=" bar" > العمليات  </th>

                    <th className="bar " >رقم الهاتف  </th>
                    <th className="bar " >اسم ولي الأمر  </th>
                    <th className=" bar" >الشعبة  </th>
                    <th className=" bar" >الصف  </th>
                    <th className="bar ">المرحلة</th>
                    <th className=" bar"> العنوان</th>
                    <th className="bar ">الجنس</th>
                    <th className="bar ">تاريخ الميلاد</th>
                    <th className=" bar">رقم بطاقة الهوية</th>
                    <th className=" bar" > الاسم باللغة الانجليزيه</th>
                    <th className=" bar" >اسم الطالب</th>
 
                </tr>
    
            </thead>
            <tbody>
            {rows.map((rows) => (
                <tr className=""  >
                  <td>
                  <button class="button3">حذف</button>

                                <button class="button2">تعديل</button>
 
                                 </td>
                    <td>{rows.phone}</td>
                    <td>{rows.father_name}</td>
                    <td>{rows.classstd.level}</td>
                    <td>{rows.classstd.class}</td>
                    <td>{rows.classstd.branch}</td>
                    <td>{rows.address}</td>
                    <td>{rows.gender}</td>
                    <td>{rows.bart}</td>
                    <td>{rows.id}</td>
                    <td>{rows.name_en} </td>
                    <td>{rows.name} </td>
                    
                </tr>
                   ))}
                </tbody>

</table>
</div>
    )
}
export default InnClass
