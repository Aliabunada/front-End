import React from 'react'
import   './Profile_manger.css'
import Grid from '@material-ui/core/Grid';


const data_Man=[{name:"مي سامي عبدالرحيم جبر",id_job:7845,Dth:"1999/1/18",phone:487676388,genders:"ذكر",address:"غزة"}]



function ProfileManger() {
    return (
      <Grid className="profile_man">
      <Grid className="Data_man">
      <p className="text_profile">المعلومات الشخصية</p>
    
      <Grid>
  <hr className="line_titlies" />
</Grid>
      <Grid  className="maq_lines">
      </Grid>
<Grid  className="masq_lines">
     </Grid>
     {data_Man.map((data) => (
       <Grid>
     <Grid className="QQ"> 
      <label className="AA" >    اسم المدير : 
     </label> 
     <label  className="Aa">{data.name}</label>
   <br />
   <br />
     <label className="AA" >   الرقم الوظيفي : 
     </label> 
     <label  className="Aa">{data.id_job}</label>
     <br />
     <br />
       <label className="AA" >   تاريخ الميلاد   : 
     </label> 
     <label  className="Aa">{data.Dth}</label>
     <br />
                          </Grid>
                      <Grid className="mern" >
                      <label className="ww " >     العنوان : 
                      </label> 
                      <label  className="Aa ">{data.address}</label>
                    <br />
                    <br />
                      <label className=" ww " >   الجنس  : 
                      </label> 
                      <label  className="Aa ">{data.genders}</label>
                      <br />
                      <br />
                      <label className="ss " >   رقم الهاتف    : 
                      </label> 
                      <label  className="Aa ">{data.phone}</label>
                      <br />
                    
                       </Grid>
     
    
                       <Grid className="dataqlines"  ></Grid>
    
     </Grid>
          ))}
</Grid>

</Grid>
    )
}
 

export default ProfileManger
