import React, {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import socials from '../socials';
import { Grid, GridItem } from '@chakra-ui/react'






function TenTwelve() {
const [showLinks, setShowLinks] = useState(false)

const firstClick = () => {
    setShowLinks(!showLinks);
}



return (
<Grid templateColumns='repeat(3, 1fr)' gap={6}>
<GridItem style={{textAlign: "center"}} w='100%' h='10' > 1. </GridItem> <GridItem id='songLinks' w='100%' h='10'> {showLinks && <><a id="spotify" href={socials[6].url}><FontAwesomeIcon icon={socials[5].icon} size="2x"/></a><a id='apple' href={socials[8].url}><FontAwesomeIcon icon={socials[7].icon} size="2x"/></a><a id='amazon' href={socials[9].url}><FontAwesomeIcon icon={socials[9].icon} size="2x"/></a><a id='soundcloud' href={socials[10].url}><FontAwesomeIcon icon={socials[10].icon} size="2x"/></a></>} </GridItem> <GridItem id='songTitles' w='100%' h='10'> <span onClick={firstClick} style={{cursor: "pointer", textDecoration: "underline"}}>intro</span> </GridItem>
<GridItem style={{textAlign: "center"}} w='100%' h='10' > 2. </GridItem> <GridItem id='songLinks' w='100%' h='10'> {showLinks && <><a id="spotify" href={socials[6].url}><FontAwesomeIcon icon={socials[5].icon} size="2x"/></a><a id='apple' href={socials[8].url}><FontAwesomeIcon icon={socials[7].icon} size="2x"/></a><a id='amazon' href={socials[9].url}><FontAwesomeIcon icon={socials[9].icon} size="2x"/></a><a id='soundcloud' href={socials[10].url}><FontAwesomeIcon icon={socials[10].icon} size="2x"/></a></>}  </GridItem> <GridItem id='songTitles' w='100%' h='10'> <span onClick={firstClick} style={{cursor: "pointer", textDecoration: "underline"}}>L.ove</span> </GridItem>
<GridItem style={{textAlign: "center"}} w='100%' h='10' > 3. </GridItem> <GridItem id='songLinks' w='100%' h='10'>  {showLinks && <><a id="spotify" href={socials[6].url}><FontAwesomeIcon icon={socials[5].icon} size="2x"/></a><a id='apple' href={socials[8].url}><FontAwesomeIcon icon={socials[7].icon} size="2x"/></a><a id='amazon' href={socials[9].url}><FontAwesomeIcon icon={socials[9].icon} size="2x"/></a><a id='soundcloud' href={socials[10].url}><FontAwesomeIcon icon={socials[10].icon} size="2x"/></a></>} </GridItem> <GridItem id='songTitles' w='100%' h='10'> <span onClick={firstClick} style={{cursor: "pointer", textDecoration: "underline"}}>I.nterlude</span> </GridItem>
<GridItem style={{textAlign: "center"}} w='100%' h='10' > 4. </GridItem> <GridItem id='songLinks' w='100%' h='10'>  {showLinks && <><a id="spotify" href={socials[6].url}><FontAwesomeIcon icon={socials[5].icon} size="2x"/></a><a id='apple' href={socials[8].url}><FontAwesomeIcon icon={socials[7].icon} size="2x"/></a><a id='amazon' href={socials[9].url}><FontAwesomeIcon icon={socials[9].icon} size="2x"/></a><a id='soundcloud' href={socials[10].url}><FontAwesomeIcon icon={socials[10].icon} size="2x"/></a></>} </GridItem> <GridItem id='songTitles' w='100%' h='10'> <span onClick={firstClick} style={{cursor: "pointer", textDecoration: "underline"}}>B.</span> </GridItem>
<GridItem style={{textAlign: "center"}} w='100%' h='10' > 5. </GridItem> <GridItem id='songLinks' w='100%' h='10'>  {showLinks && <><a id="spotify" href={socials[6].url}><FontAwesomeIcon icon={socials[5].icon} size="2x"/></a><a id='apple' href={socials[8].url}><FontAwesomeIcon icon={socials[7].icon} size="2x"/></a><a id='amazon' href={socials[9].url}><FontAwesomeIcon icon={socials[9].icon} size="2x"/></a><a id='soundcloud' href={socials[10].url}><FontAwesomeIcon icon={socials[10].icon} size="2x"/></a></>}  </GridItem> <GridItem id='songTitles' w='100%' h='10'> <span onClick={firstClick} style={{cursor: "pointer", textDecoration: "underline"}}>R.age</span> </GridItem>
<GridItem style={{textAlign: "center"}} w='100%' h='10' > 6. </GridItem> <GridItem id='songLinks' w='100%' h='10'>  {showLinks && <><a id="spotify" href={socials[6].url}><FontAwesomeIcon icon={socials[5].icon} size="2x"/></a><a id='apple' href={socials[8].url}><FontAwesomeIcon icon={socials[7].icon} size="2x"/></a><a id='amazon' href={socials[9].url}><FontAwesomeIcon icon={socials[9].icon} size="2x"/></a><a id='soundcloud' href={socials[10].url}><FontAwesomeIcon icon={socials[10].icon} size="2x"/></a></>}  </GridItem> <GridItem id='songTitles' w='100%' h='10'> <span onClick={firstClick} style={{cursor: "pointer", textDecoration: "underline"}}>A. partofme</span> </GridItem>
<GridItem style={{textAlign: "center"}} w='100%' h='10' > 7. </GridItem> <GridItem id='songLinks' w='100%' h='10'>  {showLinks && <><a id="spotify" href={socials[6].url}><FontAwesomeIcon icon={socials[5].icon} size="2x"/></a><a id='apple' href={socials[8].url}><FontAwesomeIcon icon={socials[7].icon} size="2x"/></a><a id='amazon' href={socials[9].url}><FontAwesomeIcon icon={socials[9].icon} size="2x"/></a><a id='soundcloud' href={socials[10].url}><FontAwesomeIcon icon={socials[10].icon} size="2x"/></a></>}  </GridItem> <GridItem id='songTitles' w='100%' h='10'> <span onClick={firstClick} style={{cursor: "pointer", textDecoration: "underline"}}>prelude</span> </GridItem>
<GridItem style={{textAlign: "center"}} w='100%' h='10' > 8. </GridItem> <GridItem id='songLinks' w='100%' h='10'>  {showLinks && <><a id="spotify" href={socials[6].url}><FontAwesomeIcon icon={socials[5].icon} size="2x"/></a><a id='apple' href={socials[8].url}><FontAwesomeIcon icon={socials[7].icon} size="2x"/></a><a id='amazon' href={socials[9].url}><FontAwesomeIcon icon={socials[9].icon} size="2x"/></a><a id='soundcloud' href={socials[10].url}><FontAwesomeIcon icon={socials[10].icon} size="2x"/></a></>}  </GridItem> <GridItem id='songTitles' w='100%' h='10'> <span onClick={firstClick} style={{cursor: "pointer", textDecoration: "underline"}}>SUN</span> </GridItem>
<GridItem style={{textAlign: "center"}} w='100%' h='10' > 9. </GridItem> <GridItem id='songLinks' w='100%' h='10'>  {showLinks && <><a id="spotify" href={socials[6].url}><FontAwesomeIcon icon={socials[5].icon} size="2x"/></a><a id='apple' href={socials[8].url}><FontAwesomeIcon icon={socials[7].icon} size="2x"/></a><a id='amazon' href={socials[9].url}><FontAwesomeIcon icon={socials[9].icon} size="2x"/></a><a id='soundcloud' href={socials[10].url}><FontAwesomeIcon icon={socials[10].icon} size="2x"/></a></>}  </GridItem> <GridItem id='songTitles' w='100%' h='10'> <span onClick={firstClick} style={{cursor: "pointer", textDecoration: "underline"}}>moon</span> </GridItem>
<GridItem style={{textAlign: "center"}} w='100%' h='10' > 10. </GridItem> <GridItem id='songLinks' w='100%' h='10'>  {showLinks && <><a id="spotify" href={socials[6].url}><FontAwesomeIcon icon={socials[5].icon} size="2x"/></a><a id='apple' href={socials[8].url}><FontAwesomeIcon icon={socials[7].icon} size="2x"/></a><a id='amazon' href={socials[9].url}><FontAwesomeIcon icon={socials[9].icon} size="2x"/></a><a id='soundcloud' href={socials[10].url}><FontAwesomeIcon icon={socials[10].icon} size="2x"/></a></>}  </GridItem> <GridItem id='songTitles' w='100%' h='10'> <span onClick={firstClick} style={{cursor: "pointer", textDecoration: "underline"}}>rising.Rising.RISING</span> </GridItem>
<GridItem style={{textAlign: "center"}} w='100%' h='10' > 11. </GridItem> <GridItem id='songLinks' w='100%' h='10'>  {showLinks && <><a id="spotify" href={socials[6].url}><FontAwesomeIcon icon={socials[5].icon} size="2x"/></a><a id='apple' href={socials[8].url}><FontAwesomeIcon icon={socials[7].icon} size="2x"/></a><a id='amazon' href={socials[9].url}><FontAwesomeIcon icon={socials[9].icon} size="2x"/></a><a id='soundcloud' href={socials[10].url}><FontAwesomeIcon icon={socials[10].icon} size="2x"/></a></>}  </GridItem> <GridItem id='songTitles' w='100%' h='10'> <span onClick={firstClick} style={{cursor: "pointer", textDecoration: "underline"}}>outro</span> </GridItem>
<GridItem style={{textAlign: "center"}} w='100%' h='10' > 12. </GridItem> <GridItem id='songLinks' w='100%' h='10'>  {showLinks && <><a id="spotify" href={socials[6].url}><FontAwesomeIcon icon={socials[5].icon} size="2x"/></a><a id='apple' href={socials[8].url}><FontAwesomeIcon icon={socials[7].icon} size="2x"/></a><a id='amazon' href={socials[9].url}><FontAwesomeIcon icon={socials[9].icon} size="2x"/></a><a id='soundcloud' href={socials[10].url}><FontAwesomeIcon icon={socials[10].icon} size="2x"/></a></>}  </GridItem> <GridItem id='songTitles' w='100%' h='10'> <span onClick={firstClick} style={{cursor: "pointer", textDecoration: "underline"}}>Stubborn (bonus)</span> </GridItem>
</Grid>
    )
}
export default TenTwelve;