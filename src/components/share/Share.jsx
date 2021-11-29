import React from 'react'
import {PermMedia,LiveTv,Room,EmojiEmotions} from '@mui/icons-material'
import './Share.css'

export default function Share() {

    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareWraptop">
                    <img src="/assests/Rose.jpg" alt="" className="profile" />
                    <input type="text" placeholder="What's in your mind" className="shareInput" />
                </div>
                <hr />
                <div className="shareWrapbottom">
                    <div className="shareOptions">
                        <div className="shareOptionList">
                            <PermMedia htmlColor="green" className="Shareicon"/>
                            <span className="shareIconsText">Photo/Videos</span>
                        </div>
                        <div className="shareOptionList">
                            <LiveTv htmlColor="tomato" className="Shareicon"/>
                            <span className="shareIconsText">Live</span>
                        </div>
                        <div className="shareOptionList">
                            <Room className="Shareicon"/>
                            <span className="shareIconsText">Location</span>
                        </div>
                        <div className="shareOptionList">
                            <EmojiEmotions htmlColor="Gold" className="Shareicon"/>
                            <span className="shareIconsText">Feelings</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )

}




