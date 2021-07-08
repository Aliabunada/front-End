import React from 'react'
import './Profile_manger.css'
import Grid from '@material-ui/core/Grid';
import { useState, useEffect } from 'react';
import axios from 'axios';



function ProfileManger() {

  const [managerData, setManagerData] = useState([]);
  const [isBusy, setBusy] = useState(true)

  useEffect(() => {
    axios.get('http://localhost:9000/employee/getmanagerdata')
      .then((data) => {
        setManagerData(data.data);
        setBusy(false);
      }).catch((err) => {
        // show message that there is an error
        window.location.replace('/')
      })

  }, [])


  return (
    <div> 
      {!isBusy ? (
    <Grid className="profile_man">
      
      <Grid className="Data_man">
        <p className="text_profile">المعلومات الشخصية</p>

        <Grid>
          <hr className="line_titlies" />
        </Grid>
        <Grid className="maq_lines">
        </Grid>
        <Grid className="masq_lines">
        </Grid>

        <Grid>
          <Grid className="QQ">
            <label className="AA" >    اسم المدير :
            </label>
            <label className="Aa">{managerData.managername}</label>
            <br />
            <br />
            <label className="AA" >   الرقم الوظيفي :
            </label>
            <label className="Aa">{managerData.jobNumber}</label>
            <br />
            <br />
            <label className="AA" >   تاريخ الميلاد   :
            </label>
            <label className="Aa">{managerData.date_Of_birth.slice(0, 10)}</label>
            <br />
          </Grid>
          <Grid className="mern" >
            <label className="ww " >     العنوان :
            </label>
            <label className="Aa ">{managerData.address}</label>
            <br />
            <br />
            <label className=" ww " >   الجنس  :
            </label>
            <label className="Aa ">{managerData.gender}</label>
            <br />
            <br />
            <label className="ss " >   رقم الهاتف    :
            </label>
            <label className="Aa ">{managerData.phone}</label>
            <br />

          </Grid>


          <Grid className="dataqlines"  ></Grid>

        </Grid>

      </Grid>


    </Grid>
    ):(<h1>Looding ..</h1>)}
    </div>
  )
}


export default ProfileManger
