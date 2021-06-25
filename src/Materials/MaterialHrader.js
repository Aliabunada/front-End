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
function MaterialHrader() {
  const classes = useStyles();
      return (
        <div className={classes.roots}>
          <AppBar  className={classes.roots} position="static"> 
           <div class="li" id="bs-example-navbar-collapse-1">
          <ul class="navs" variant="dense">

             <Link to="/part" className="Liks_manger">
             <li  className="lis"  color="black">
             المشاركون 
             </li>
      </Link>
   
      <Link to="/add_advs" className="Liks_manger">
      <li  className="lis"  color="black">

        الإعلانات  
           </li>

      </Link>
     
      <Link to="/socail_teacher" className="Liks_manger">
      <li  className="lis"  color="black">
         المنتدى 
          </li>
      </Link>
      <Link to="/teacher" className="Liks_manger">
      <li  className="lis"  color="black">
           الامتحانات 
          </li>

      </Link>
      <Link to="/task" className="Liks_manger">
      <li  className="lis"  color="black">
           الأنشطة والواجبات  
          </li>
      </Link>
      
       
      <Link to="/teacher" className="Liks_manger">
      <li  className="lis"  color="black">
         الصفحة الرئيسية 
          </li>
      </Link>
      </ul>
        </div>
      

      </AppBar>
 
        </div>
    )
}

export default MaterialHrader
