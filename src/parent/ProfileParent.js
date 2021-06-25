import React from 'react'
import Grid from '@material-ui/core/Grid';
var data_Parent=[{name:"مي سامي عبدالرحيم جبر",phone:487676388,Job:"موظف", id:34567}]

function ProfileParent() {
    return (
        <Grid className="profile_man">
        <Grid className="Data_man">
        <p className="text_profile">المعلومات الشخصية</p>
      
        <Grid>
    <hr className="line_titlies" />
    </Grid>
        <Grid  className="ma_lines">
        </Grid>
    <Grid  className="mas_lines">
       </Grid>
       {data_Parent.map((data) => (
         <Grid>
       <Grid className="QQQ"> 
        <label className="AA" >    اسم الاب : 
       </label> 
       <label  className="Aa">{data.name}</label>
     <br />
       <label className="AA" >   رقم الهوية   : 
       </label> 
       <label  className="Aa">{data.id}</label>
       <br />
         <label className="AA" >    رقم الهاتف   : 
       </label> 
       <label  className="Aa">{data.phone}</label>
       <br />
         <label className="AA" >    الوظيفة     : 
       </label> 
       <label  className="Aa">{data.Job}</label>
       <br />
          
       <Grid className="datawliines"  ></Grid>

         
                     </Grid>
                   
       
       
      
       </Grid>
            ))}
    </Grid>
    
    </Grid>
    )
}

export default ProfileParent
