import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
 import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    roots: {
      flexGrow: 1,
      background:'#ebaf6033' ,
      justifyContent:'space-evenly',
   display:'flex',
   height:55,
      },
   
     
  }));
function AppBareMan() {
    const classes = useStyles();
    return (
        <div className={classes.roots}>
      <AppBar  className={classes.roots} position="static">
      <div class="li" id="bs-example-navbar-collapse-1">

<ul class="navs" variant="dense">         
                 
     <Link to="/Class" className="Liks_manger">
<li  className="lis" color="black">
الصفوف</li >
</Link>
<Link to="/marks_manger" className="Liks_manger">
<li  className="lis" color="black">
العلامات
</li >
</Link>
<Link to="/teachers" className="Liks_manger">
<li  className="lis" color="black">
المعلمين
</li >
</Link>
<Link to="/classroom" className="Liks_manger">

<li  className="lis" color="black">
الغرف الدراسية
</li >
</Link>
 
<Link to="/Exam" className="Liks_manger">

<li  className="lis" color="black">
الامتحانات
</li >
</Link>
<Link to="/profiles_manger" className="Liks_manger">

<li  className="lis" color="black">
البيانات الشخصية
</li >
</Link>
<Link to="/manger" className="Liks_manger">

<li  className="lis" color="black">
الصفحة الرئيسية
</li >
</Link>

</ul>
        </div>
      </AppBar>
    </div>
    )
}

export default AppBareMan
