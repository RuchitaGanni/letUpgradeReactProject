import React from 'react'
import './Topbar.css'
import { Search, Person,ChatBubble,Notifications } from '@mui/icons-material'

export default function Topbar() {
    return (
        <div className="topBar">
            <div className="topBarLeft">
                <span className="logo">
                    ReactBook
                </span>
            </div>
            <div className="topBarMiddle">
                <div className="searchBar">
                    <Search className="searchBarIcon" />
                    <input type="text" placeholder="search home" className="seacrhInput" />
                </div>
            </div>
            <div className="topBarRight">
                <div className="topbarlinks">
                    <span className="topbarlink">Home</span>
                    <span className="topbarlink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconitems">
                        <Person  className="topBarIconImages"/>
                        <span className="topbarIconBadge">
                            1
                        </span>
                    </div>
                    <div className="topbarIconitems">
                        <ChatBubble   className="topBarIconImages"/>
                        <span className="topbarIconBadge">
                            3
                        </span>
                    </div>
                    <div className="topbarIconitems">
                        <Notifications  className="topBarIconImages" />
                        <span className="topbarIconBadge">
                            3
                        </span>
                    </div>
                </div>
                <img src="/assests/Rose.jpg" alt="" className="profilepic" />
            </div>

        </div>
    )
}
