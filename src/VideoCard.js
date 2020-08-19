import React from 'react';
import './VideoCard.css'
import Avatar from "@material-ui/core/Avatar";


function VideoCard ({image, title, timestamp, channel, views, channelIamge}) {
    return (
        <div className="vid">
            <img className='vid__thumbnail' src={image} alt='videoImg'/>
            <div className="vid__info">
                <Avatar className="vid__avatar" alt={channel} src = {channelIamge}/>
                <div className="vid__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} . {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}


export default VideoCard;