import React from 'react'


function MainVideo() {
    return (
        <div className="main-video">
           {
               <iframe className="video"src="https://www.youtube.com/embed/b5Sp0jIHDYE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           } 
           <h2>Ayra Starr - Bloody Samaritan (Performance Video)</h2>
        </div>
    )
}

export default MainVideo
