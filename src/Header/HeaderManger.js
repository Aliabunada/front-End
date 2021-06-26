import React from 'react'
import image from './image.jpg';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
 import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
function HeaderManger() {
    return (
        
           
        <nav className="Header_std" >
        <div className="header-right">
        <div className="header-option">
        <ArrowDropDownIcon />
        </div>
        <div className="header-option">
        <NotificationsIcon style={{ fontSize:22 }}  />
        </div>

        
       
        <div className="header-option">
        <ChatIcon style={{ fontSize:22 }} />
        </div>
        <Link to="/manger" className="header_link">
        <div className="header-option header-option--active">
        <HomeIcon style={{ fontSize:22 }} />
        </div>
        </Link>

         <div className="header-info">
        <h4>مي سامي عبد الرحيم جبر</h4>
        <AccountCircleIcon style={{ fontSize:22 }}/>
         </div>
        </div>

             
        <div className="Header_stds">
        <span>البوابة الإلكترونية</span>
      
        <img  src={image}  className="Header_imgs" alt="description"   />

        </div>
       
    </nav>
    )
}

export default HeaderManger
