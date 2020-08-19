import React from 'react'
import './ChannelRow.css'
import Avatar from "@material-ui/core/Avatar";
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";


function ChannelRow({image, channel, verified, subs,description, noOfVideos, }) {
    return (
        <div className='channel'>
            <Avatar
            className='channel__logo'
            alt={channel}
            src={image}
            />
            <div className='channel__text'>
                <h4>{channel} {verified && <VerifiedIcon/> }</h4>
                <p>
                    {subs} subscribers . {noOfVideos} videos
                </p>
                <p>
                    {description }
                </p>

            </div>
           
        </div>
    )
}

export default ChannelRow;
