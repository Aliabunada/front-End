import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import Parent_homes from "./Parent_home.css";
const useStyles = makeStyles((theme) => ({
    roots: {
      flexGrow: 1,
      background:'#ebaf6033' ,
   display:'flex',
   justifyContent:'space-evenly',
       },
  
  }));
function AppBareParent() {
    const classes = useStyles();

    return (
        <div className={classes.roots}>
      <AppBar  className={classes.roots} position="static">
      <div class="li" id="bs-example-navbar-collapse-1">
      <ul class="navs" variant="dense">

         <select className="slect">
          <option className="optss" value="">
            {" "}
            أبنائي في المدارس{" "}
          </option>
          <option className="opt">مي سامي جبر</option>
          <option className="opt">مي سامي جبر</option>
        </select>
 
          <Link to="/task" className="Liks_manger">

<li className="lis" color="black">
المعلمون
</li>
</Link>
<Link to="/socail_teacher" className="Liks_manger">

<li className="lis" color="black">
العلامات
</li>
</Link>
 
<Link to="/profile_Parent" className="Liks_manger">

<li className="lis" color="black">
البيانات الشخصية
</li>
</Link>
<Link to="/parent" className="Liks_manger">

<li className="lis" color="black">
الصفحة الرئيسية
</li>
</Link>
</ul>
        </div>
      </AppBar>
    </div>
    )
}

export default AppBareParent
