import React from 'react'
import './Post.css'
import {MoreVert,ThumbUp,Share,Comment} from '@mui/icons-material'

export default function Post() {
    
        return (
            <div className="Post">
                <div className="postWrapper">
                    <div className="postTop">
                        <div className="postTopLeft">
                        <img src="/assests/2Friend.jpg" alt="" className="postUserPic" />
                        <span className="postUserNm">Friend1</span>
                        <span className="postDate">10min ago</span>
                        </div>
                        <div className="postTopRight">
                        <MoreVert/>
                        </div>
                    </div>
                    <div className="postCenter">
                        <span className="postText">Smooth like Butter...!</span>
                        <img src="/assests/post1.png" alt="" className="postImg" />
                    </div>
                    <div className="postBottom">
                        <div className="likePost">
                            <ThumbUp htmlColor="skyblue" className="postIcons"/>
                        </div>
                        <div className="commentPost">
                            <Comment className="postIcons"/>
                        </div>
                        <div className="sharePost" >
                            <Share className="postIcons"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    
}

