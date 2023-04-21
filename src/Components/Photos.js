import React from 'react'
import collage from "../Images/collage.png"

function Photos() {

    return (
        <>            
        <iframe width="420" height="275" src="https://www.youtube-nocookie.com/embed/LRy9HgWO51M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
        
        <div className='photos'>
            <img src={collage} alt='Collage of simpcxty photos' />        
        </div>
        </>
    )
}



export default Photos;