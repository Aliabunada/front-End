import React from 'react'
import Grid from '@material-ui/core/Grid';

import NotificationsIcon from '@material-ui/icons/Notifications';
import { Link } from 'react-router-dom';
function AdvTeacher() {
    return (
        <Grid className="adv_stds">
       <Grid className="adv-info_adv"> 
          <Link to="/add_advs" className="avdman_links">
            <NotificationsIcon fontSize="large"   />
            <h4 className="h4ss">لوحة الأعلانات</h4>
          </Link>
          </Grid>
      </Grid>
    )
}


export default AdvTeacher
