import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    roots: {
      flexGrow: 1,
      background:'#ebaf6033' ,
   display:'flex',
   justifyContent:'space-evenly',

    
      },
   
  }));
function AppBareStd() {
    const classes = useStyles();
    return (
        <div className={classes.roots}>
      <AppBar  className={classes.roots} position="static">
             
      <div class="li" id="bs-example-navbar-collapse-1">

<ul class="navs" variant="dense">
 
         
          
          <Link to="/Social" className="Liks_manger">

<li   className="lis"color="black">
المنتدى
</li>
</Link>
          <Link to="/Exams_std" className="Liks_manger">

<li  className="lis" color="black">
الامتحانات</li>
</Link>
<Link to="/marks_std" className="Liks_manger">

<li  className="lis" color="black">
العلامات
</li>
</Link>
<Link to="/homeWork_std" className="Liks_manger">

<li  className="lis" color="black">
الأنشطة والواجبات
</li>
</Link>
 
<Link to="/profile" className="Liks_manger">

<li  className="lis" color="black">
البيانات الشخصية
</li>
</Link>
<Link to="/student" className="Liks_manger">

<li  className="lis" color="black">
الصفحة الرئيسية
</li>
</Link>
</ul>
</div>
        
      </AppBar>
    
      </div>
    )
}

export default AppBareStd
