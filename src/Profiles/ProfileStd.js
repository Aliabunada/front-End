import React from "react";
 import Grid from '@material-ui/core/Grid';
import   "./Profile_manger.css";

var data_Man=[{name:"مي سامي عبدالرحيم جبر",name_en:"Mai SamiJaber",id:345678,Dth:"1999/1/18",phone:487676388,genders:"ذكر",address:"غزة", classstd: { branch:"علمي",level :5,class:" السابع "},}]

function ProfileStd() {
  return (
    <Grid className="profile_man">
    <Grid className="Datas_man">
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
    <label className="AA" >    اسم الطالب : 
   </label> 
   <label  className="Aa">{data.name}</label>
 <br />
    <br />

   <label className="AA" >   اسم الطالب  : 
   </label> 
   <label  className="Aa">{data.name_en}</label>
   <br />
   <br />

     <label className="AA" >    رقم الهوية   : 
   </label> 
   <label  className="Aa">{data.id}</label>
   <br />
   <br />

     <label className="AA" >    تاريخ الميلاد    : 
   </label> 
   <label  className="Aa">{data.Dth}</label>
   <br />
   <br />

      <label className="AA " >     العنوان : 
                    </label> 
                    <label  className="Aa ">{data.address}</label>
   <br />
     
                 </Grid>
                    <Grid className="mern" >
                   
                    <label className=" ww " >   الجنس  : 
                    </label> 
                    <label  className="Aa ">{data.genders}</label>
                    <br />
                    <br />

                    <label className=" ww " >   المرحلة  : 
                     </label> 
                    <label  className="Aa ">{data.classstd.branch}</label>
                    <br />
                    <br />

                    <label className=" ww " >   الصف  : 
                    </label> 
                    <label  className="Aa ">{data.classstd.class}</label>
                    <br />
                       <br />

                    <label className="ww " > الشعبة: 
                    </label> 
                    <label  className="Aa ">{data.classstd.level}</label>
                  <br />
                  <br />

                    <label className="ss " >   رقم الهاتف    : 
                    </label> 
                    <label  className="Aa ">{data.phone}</label>
                  
                     </Grid>
   
  
                     <Grid className="dataqliness"  ></Grid>
  
   </Grid>
        ))}
</Grid>

</Grid>
  );
}

export default ProfileStd;
