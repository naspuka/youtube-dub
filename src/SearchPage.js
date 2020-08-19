import React from 'react';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import "./SearchPage.css";
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage () {
    return (
        <div className='search'>
            <div className='search__filter'>
                <TuneOutlinedIcon/>
                <h2>FILTER</h2>
                
            </div>
            <hr/>

            <ChannelRow
            image = "https://i.ibb.co/cbk2B4X/index.jpg" 
            channel = "Naspuka Anything React"
            verified 
            subs = "400k"
            noOfVideos = {382}
            description = "More video to come your way hit the subscribe button"
            />
             <hr/>
            <VideoRow
            title= 'Become a Web Developer in 5 days'
            views ='2.4M Views'
            description="work smart not hard"
            subs='45K'
            timestamp='1 minute ago'
            channel= 'John Doe'
            image = "https://i.ibb.co/NtPczh6/dev1.png"/>
            <VideoRow
            title= 'Become a Web Developer in 5 days'
            views ='2.4M Views'
            description="work smart not hard"
            subs='45K'
            timestamp='1 minute ago'
            channel= 'John Doe'
            image = "https://i.ibb.co/NtPczh6/dev1.png"/>
            <VideoRow
            title= 'Become a Web Developer in 5 days'
            views ='2.4M Views'
            description="work smart not hard"
            subs='45K'
            timestamp='1 minute ago'
            channel= 'John Doe'
            image = "https://i.ibb.co/NtPczh6/dev1.png"/>
            <VideoRow
            title= 'Become a Web Developer in 5 days'
            views ='2.4M Views'
            description="work smart not hard"
            subs='45K'
            timestamp='1 minute ago'
            channel= 'John Doe'
            image = "https://i.ibb.co/NtPczh6/dev1.png"/>
            <VideoRow
            title= 'Become a Web Developer in 5 days'
            views ='2.4M Views'
            description="work smart not hard"
            subs='45K'
            timestamp='1 minute ago'
            channel= 'John Doe'
            image = "https://i.ibb.co/NtPczh6/dev1.png"/>
            <VideoRow
            title= 'Become a Web Developer in 5 days'
            views ='2.4M Views'
            description="work smart not hard"
            subs='45K'
            timestamp='1 minute ago'
            channel= 'John Doe'
            image = "https://i.ibb.co/NtPczh6/dev1.png"/>
            <VideoRow
            title= 'Become a Web Developer in 5 days'
            views ='2.4M Views'
            description="work smart not hard"
            subs='45K'
            timestamp='1 minute ago'
            channel= 'John Doe'
            image = "https://i.ibb.co/NtPczh6/dev1.png"/>
            <VideoRow
            title= 'Become a Web Developer in 5 days'
            views ='2.4M Views'
            description="work smart not hard"
            subs='45K'
            timestamp='1 minute ago'
            channel= 'John Doe'
            image = "https://i.ibb.co/NtPczh6/dev1.png"/>
        </div>
    )
}

export default SearchPage;