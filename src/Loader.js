import React from 'react';
import { Spinner } from '@chakra-ui/react'

function Loader() {
    return (
        <div className='Loader'>
        <div className='loadContent'>
        <p>NATTY BABY!</p>
        <h2>Be Patient, We're Loading Everything Behind The Scenes Now.</h2>
        <Spinner
        className="spin"
        size='xl'
        thickness='0.75rem'
        speed='0.65s'
        emptyColor='gray.100'
        color='blue.200' sx={{width: "10rem", height: "10rem"}}/>
        </div>
        </div>
    )
}

export default Loader;