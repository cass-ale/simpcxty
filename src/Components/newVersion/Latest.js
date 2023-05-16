import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react'
import cover1 from "../../Images/5.jpeg";
import cover2 from "../../Images/7.jpeg";
import cover3 from "../../Images/sat1.jpeg";
import cover4 from "../../Images/9.jpeg"

function Latest() {

    return(
        <div className='latest'>
        <Grid templateColumns='repeat(2, 1fr)'>
        <GridItem><a href='https://unitedmasters.com/m/642b4f481e4cf0054bfba477' target="_blank" rel="noopener noreferrer"><img src={cover1} alt="Saturday by simpcxty Featuring King Jaah" /></a></GridItem>
        <GridItem><a href='https://unitedmasters.com/m/642b4f481e4cf0054bfba477' target="_blank" rel="noopener noreferrer"><img src={cover3} alt="Saturday by simpcxty Featuring King Jaah" /></a></GridItem>
        <GridItem><a href='https://unitedmasters.com/m/642b4f481e4cf0054bfba477' target="_blank" rel="noopener noreferrer"><img src={cover3} alt="Saturday by simpcxty Featuring King Jaah" /></a></GridItem>
        <GridItem><a href='https://unitedmasters.com/m/642b4f481e4cf0054bfba477' target="_blank" rel="noopener noreferrer"><img src={cover1} alt="Saturday by simpcxty Featuring King Jaah" /></a></GridItem>
        <GridItem><a href='https://unitedmasters.com/m/642b4f481e4cf0054bfba477' target="_blank" rel="noopener noreferrer"><img src={cover2} alt="Saturday by simpcxty Featuring King Jaah" /></a></GridItem>
        <GridItem><a href='https://unitedmasters.com/m/642b4f481e4cf0054bfba477' target="_blank" rel="noopener noreferrer"><img src={cover4} alt="Saturday by simpcxty Featuring King Jaah" /></a></GridItem>
        <GridItem><a href='https://unitedmasters.com/m/642b4f481e4cf0054bfba477' target="_blank" rel="noopener noreferrer"><img src={cover4} alt="Saturday by simpcxty Featuring King Jaah" /></a></GridItem>
        <GridItem><a href='https://unitedmasters.com/m/642b4f481e4cf0054bfba477' target="_blank" rel="noopener noreferrer"><img src={cover2} alt="Saturday by simpcxty Featuring King Jaah" /></a></GridItem>


        </Grid>
        </div>
    )
}
export default Latest;