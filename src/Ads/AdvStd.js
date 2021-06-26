import React from 'react'
import   './Adv_std.css'
import Grid from '@material-ui/core/Grid';
import NotificationsIcon from '@material-ui/icons/Notifications';
function AdvStd() {
    return (
        <Grid className="adv_stds">
             <Grid className="adv-info_adv">
        
          <NotificationsIcon fontSize='large'/>
            <h4 className="h4ss">لوحة التنبيهات</h4>
           
             </Grid>
        </Grid>
    )
}

export default AdvStd
