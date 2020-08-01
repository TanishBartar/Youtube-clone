import React from 'react';
import './siderec.css'
import SidebarRow from './sidebarrow'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import IconButton from '@material-ui/core/IconButton';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
function sidebar(){
    return(
        <div>
        <div className="row">
        
         <HomeIcon className="icon"/>
        
          <h2 className="title">Home</h2>
       </div>
         <div className="row">
            
            <WhatshotIcon className="icon"/>
           
            <h2 className="title">Trending</h2>
         </div>
         <div className="row">

              <SubscriptionsIcon className="icon" />
             <h2 className="title">Subscriptions</h2>
             
         </div>
         <hr className="hr"/>
         <div className="row">
             <VideoLibraryIcon className="icon"/>
             <h2 className="title">Library</h2>
         </div>
         <div className="row">
             <HistoryIcon className="icon"/>
             <h2 className="title">History</h2>
         </div>
         <div className="row">
             <OndemandVideoIcon className="icon"/>
             <h2 className="title">Your Videos</h2>
         </div>
         <div className="row">
             <WatchLaterIcon className="icon"/>
             <h2 className="title">Watch later</h2>
         </div>
         <div className="row">
             <ThumbUpAltIcon className="icon"/>
             <h2 className="title">Liked videos</h2>
         </div>
         <div className="row">
             <PlaylistPlayIcon className="icon"/>
             <h2 className="title">ONE DIRECTION</h2>
         </div>
         <hr />
        </div>

     
    )
}
export default sidebar;