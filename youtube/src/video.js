import React from 'react';
import './video.css';
import { Avatar } from '@material-ui/core';

function video({image,title,channel,views,timestamp}){
    return(
        <div className="Video">
            <img src={image} className="thumbnail"></img>
            <div className="Videoinfo">
                <Avatar className="videoavatar"></Avatar>
                <div className="videotext">
                  <h4>{title}</h4>
                  <p>{channel}</p>
                  <p>{views}
                   . {timestamp}
                   </p>
                </div>
            </div>
        </div>

    )
}
export default video;
