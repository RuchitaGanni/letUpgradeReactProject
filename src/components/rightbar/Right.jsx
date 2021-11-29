import React from 'react'
import './right.css'

export default function Right() {
    return (
        <div className="rightBar">
            <div className="rightBarWrapper">
                <h3 className="chatRoomH3">Chat Room</h3>
                <div className="chatRoom">

                    <ul className="chatIcons">
                        <li className="chatList">
                            <div className="chatRoomContainer">
                                <img src="/assests/1friend.jpg" alt="" className="chatImages" />
                                <span className="chatActive"></span>

                            </div>
                            <span className="chatProfileName">
                                Friend1
                            </span>

                        </li>
                        <li className="chatList">
                            <div className="chatRoomContainer">
                                <img src="/assests/2friend.jpg" alt="" className="chatImages" />
                                <span className="chatInActive"></span>

                            </div>
                            <span className="chatProfileName">
                                Friend2
                            </span>

                        </li>
                        <li className="chatList">
                            <div className="chatRoomContainer">
                                <img src="/assests/1friend.jpg" alt="" className="chatImages" />
                                <span className="chatActive"></span>

                            </div>
                            <span className="chatProfileName">
                                Friend1
                            </span>

                        </li>
                        <li className="chatList">
                            <div className="chatRoomContainer">
                                <img src="/assests/1friend.jpg" alt="" className="chatImages" />
                                <span className="chatActive"></span>

                            </div>
                            <span className="chatProfileName">
                                Friend1
                            </span>

                        </li>
                    </ul>

                   
                </div>
            </div>
        </div>
    )
}
