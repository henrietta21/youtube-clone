import React from 'react'
import Comment from '../Components/Comment';
import MainVideo from '../Components/MainVideo';
import Suggestion from '../Components/Suggestion';

function Body() {
    return (
        <div className="col body">
            <div className="main-area">
                <MainVideo />
                <hr />
                <Comment />
            </div>
            <div>
                <Suggestion />
            </div>
        </div>
    )
}

export default Body
