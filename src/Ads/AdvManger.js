import React from 'react'
import   './Adv_manger.css'
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

function AdvManger() {
    return (
        <Grid className="adv_stds">
          
          <Grid className="adv-info_adv">
          <Link to="/add_adv" className="avdman_links">
          <AddIcon  style={{ fontSize:30 }}/>
            <h4 className="h4man">لوحة الأعلانات</h4>
            </Link>

             </Grid>
        </Grid>
    )
}

export default AdvManger
