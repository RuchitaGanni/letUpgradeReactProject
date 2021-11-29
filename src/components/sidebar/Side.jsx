import React from 'react'
import {Feed,Chat,Groups,Videocam,Place,Event,FoodBank} from '@mui/icons-material'
import './side.css'

export default function Side() {
    return (
        <div className="sideBar">
            <div className="sideWrapper">
                <ul className="sidebarList">
                    <li className="sideBarListItem">
                        <Feed className="sideBarListIcon"/>
                        <span className="sidebarListIconText">News Feed</span>
                    </li>
                    <li className="sideBarListItem">
                        <Chat className="sideBarListIcon"/>
                        <span className="sidebarListIconText">Chat</span>
                    </li>
                    <li className="sideBarListItem">
                        <Groups className="sideBarListIcon"/>
                        <span className="sidebarListIconText">Groups</span>
                    </li>
                    <li className="sideBarListItem">
                        <Videocam className="sideBarListIcon"/>
                        <span className="sidebarListIconText">Videos Trending</span>
                    </li>
                    <li className="sideBarListItem">
                        <Place className="sideBarListIcon"/>
                        <span className="sidebarListIconText">Place</span>
                    </li>
                    <li className="sideBarListItem">
                        <Event className="sideBarListIcon"/>
                        <span className="sidebarListIconText">Events</span>
                    </li>
                    <li className="sideBarListItem">
                        <FoodBank className="sideBarListIcon"/>
                        <span className="sidebarListIconText">Restaurant</span>
                    </li>

                </ul>
                <button className="more">Show More</button>
                <hr/>
                <ul className="sideBarFriendList">
                    <li className="sideBarFriendItem">
                        <img src="/assests/1friend.jpg" alt="" className="sideBarFriendImg" />
                        <span className="sideBarFriendName">Freind1</span>

                    </li>
                    <li className="sideBarFriendItem">
                        <img src="/assests/2friend.jpg" alt="" className="sideBarFriendImg" />
                        <span className="sideBarFriendName">Freind3</span>

                    </li>
                    <li className="sideBarFriendItem">
                        <img src="/assests/3friend.jpg" alt="" className="sideBarFriendImg" />
                        <span className="sideBarFriendName">Freind3</span>

                    </li>
                    <li className="sideBarFriendItem">
                        <img src="/assests/1friend.jpg" alt="" className="sideBarFriendImg" />
                        <span className="sideBarFriendName">Freind1</span>

                    </li>
                    <li className="sideBarFriendItem">
                        <img src="/assests/2friend.jpg" alt="" className="sideBarFriendImg" />
                        <span className="sideBarFriendName">Freind3</span>

                    </li>
                    <li className="sideBarFriendItem">
                        <img src="/assests/3friend.jpg" alt="" className="sideBarFriendImg" />
                        <span className="sideBarFriendName">Freind3</span>

                    </li>
                    <li className="sideBarFriendItem">
                        <img src="/assests/1friend.jpg" alt="" className="sideBarFriendImg" />
                        <span className="sideBarFriendName">Freind1</span>

                    </li>
                    <li className="sideBarFriendItem">
                        <img src="/assests/2friend.jpg" alt="" className="sideBarFriendImg" />
                        <span className="sideBarFriendName">Freind3</span>

                    </li>
                    <li className="sideBarFriendItem">
                        <img src="/assests/3friend.jpg" alt="" className="sideBarFriendImg" />
                        <span className="sideBarFriendName">Freind3</span>

                    </li>
                </ul>
            </div>
        </div>
    )
}
