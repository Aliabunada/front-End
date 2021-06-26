import { Link } from "react-router-dom";
import   './Parent_home.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
   
 
const useStyles = makeStyles((theme) => ({
  roots: {
    flexGrow: 1,
    background:'#ebaf6033' ,
      height:55,
      display:'flex' ,
 direction:'rtl'
 
    },
 
  
}));
function AppBare() {
    const classes = useStyles();
    return (
        <div className={classes.roots}>
      <AppBar  className={classes.roots} position="static">
           
      <div class="li" id="bs-example-navbar-collapse-1">

        <ul class="navs" variant="dense">
         
        <Link to="/teacher" className="Liks_manger">

<li  className="lis" color="black">
الصفحة الرئيسية
</li>
</Link>
<Link to="/Profile_teacher" className="Liks_manger">

<li  className="lis" color="black">
البيانات الشخصية
</li>
</Link>        
           
<Link to="/mark_teacher" className="Liks_manger">

<li className="lis" color="black">
الامتحانات</li>
</Link>
<Link to="/mark_teacher" className="Liks_manger">

<li  className="lis"color="black">
العلامات
</li>
</Link>
 
<Link to="/socail_teacher" className="Liks_manger">

<li  className="lis" color="black">
المنتدى
</li>
</Link>
<Link to="/task" className="Liks_manger">

<li   className="lis" color="black">
الأنشطة والواجبات
</li>
</Link>
 
        </ul>
        </div>
      

      </AppBar>
    
 </div>
    )
}

export default AppBare
