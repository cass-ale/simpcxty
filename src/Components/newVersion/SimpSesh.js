import React, {useRef} from 'react'


function SimpSesh() {
    const targetRef = useRef(null);

    const handleClick = () => {
      targetRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    };

    return (
        <div ref={targetRef} onClick={handleClick} className='simpsesh'>
            <iframe src="https://www.youtube-nocookie.com/embed/-PeQ2icIZ8U?controls=1&mute=1&autoplay=1&loop=1&playlist=-PeQ2icIZ8U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
        </div>
    )
}

export default SimpSesh