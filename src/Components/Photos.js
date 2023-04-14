import React from 'react'
import topCenter from "../Images/simp10.JPEG";
import topLeft from "../Images/IMG_6370.JPG";
import topRight from "../Images/IMG_4375.JPG";
import center from "../Images/IMG_6325.JPG";
import right from "../Images/126.JPEG";
import botCenter from "../Images/IMG_2993.JPG";

function Photos() {

    return (
        <>
        <section className='row1'>
            <section id='topLeft'><img src={topLeft} alt='simpcxty taken by...' /></section>
            <section id='topCenter'><img src={topCenter} alt='simpcxty taken by...' /></section>
            {/* <section id='topRight'><img src={topRight} alt='simpcxty taken by...' /></section> */}
        </section>
        <section className='row2'>
            <section id='center'><img src={center} alt='simpcxty taken by...' /></section>
            <section id='right'><img src={right} alt='simpcxty taken by...' /></section>
        </section>
        
        </>
    )
}



export default Photos;