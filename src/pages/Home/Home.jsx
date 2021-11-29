import React from 'react';
import Topbar from '../../components/topbar/Topbar'
import Side from '../../components/sidebar/Side'
import Feed from '../../components/feed/Feed'
import './Home.css'
import Right from '../../components/rightbar/Right'
export default function Home() {

    return (
        // fragements
        <>
            <Topbar />
            <div className="homeContainer">
                <Side />
                <Feed />
                <Right />
            </div>

        </>
    )
}
;