import React from 'react';
import './App.css';
import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';
import VideocamIcon from '@material-ui/icons/Videocam';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
function home(){
    const word = "hello world"
    return(
            <div className="header">
                <div className="topleft">
                    <IconButton >
                     <MenuIcon />
                    </IconButton>
                    <IconButton>
                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1024px-Logo_of_YouTube_%282015-2017%29.svg.png" className="logo"></img>
                    </IconButton>
                </div>
                <div className="input">
                   <input placeholder="Search"></input>
                       <SearchIcon className="search" />
                
                </div>
                <div classNAme="icons">
                     <IconButton>
                     <VideocamIcon/>
                     </IconButton>  
                   
                        <IconButton>
                        <AppsIcon />       
                       
                       </IconButton>
                      
                    <IconButton>
                      <NotificationsIcon />
                  
                    </IconButton>
                </div>
                    

                </div>
               
                  

    )
}
export default home;