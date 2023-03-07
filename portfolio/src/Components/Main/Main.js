import React from "react";

function Main (){

    return(
        <div className="main">

            <div className="main-note">
                <input type="text" id="main-title" autoFocus />
                <textarea id="main-body" placeholder="What's on your mind" />
            </div>
            <div className="main-note-preview">
                <h1 className="main-preview">Title</h1>
                <div className="note-preview">note preview </div>


            </div>
            
        </div>
    )
}

export default Main