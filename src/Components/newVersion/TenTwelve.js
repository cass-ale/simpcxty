import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import socials from '../socials';
import { Grid, GridItem } from '@chakra-ui/react'

function TenTwelve() {
    return (
<Grid className='trackGrid' templateColumns='repeat(2, 1fr)' gap={100}>

<GridItem className='trackCards'>
<span>I</span>
<span id='songLinks'>
<a id="spotify" href={socials[6].url} aria-label="Listen to intro on Spotify"><FontAwesomeIcon icon={socials[5].icon} size="2x"/></a><a id='apple' href={socials[8].url} aria-label="Listen to intro on Apple Music"><FontAwesomeIcon icon={socials[7].icon} size="2x"/></a><a id='amazon' href={socials[9].url} aria-label="Listen to intro on Amazon Music"><FontAwesomeIcon icon={socials[9].icon} size="2x"/></a><a id='soundcloud' href={socials[10].url} aria-label="Listen to intro on SoundCloud"><FontAwesomeIcon icon={socials[10].icon} size="2x"/></a>
</span>
<span id='songTitles' style={{textDecoration: "underline"}}>intro</span>
</GridItem>

<GridItem className='trackCards'>
<span>II</span>
<span id='songLinks'>
<a id="spotify" href={socials[6].url} aria-label="Listen to L.ove on Spotify"><FontAwesomeIcon icon={socials[5].icon} size="2x"/></a><a id='apple' href={socials[8].url} aria-label="Listen to L.ove on Apple Music"><FontAwesomeIcon icon={socials[7].icon} size="2x"/></a><a id='amazon' href={socials[9].url} aria-label="Listen to L.ove on Amazon Music"><FontAwesomeIcon icon={socials[9].icon} size="2x"/></a><a id='soundcloud' href={socials[10].url} aria-label="Listen to L.ove on SoundCloud"><FontAwesomeIcon icon={socials[10].icon} size="2x"/></a>
</span>
<span id='songTitles' style={{textDecoration: "underline"}}>L.ove</span>
</GridItem>

<GridItem className='trackCards'>
<span>III</span>
<span id='songLinks'>
<a id="spotify" href={socials[6].url} aria-label="Listen to I.nterlude on Spotify"><FontAwesomeIcon icon={socials[5].icon} size="2x"/></a><a id='apple' href={socials[8].url} aria-label="Listen to I.nterlude on Apple Music"><FontAwesomeIcon icon={socials[7].icon} size="2x"/></a><a id='amazon' href={socials[9].url} aria-label="Listen to I.nterlude on Amazon Music"><FontAwesomeIcon icon={socials[9].icon} size="2x"/></a><a id='soundcloud' href={socials[10].url} aria-label="Listen to I.nterlude on SoundCloud"><FontAwesomeIcon icon={socials[10].icon} size="2x"/></a>
</span>
<span id='songTitles' style={{textDecoration: "underline"}}>I.nterlude</span>
</GridItem>

<GridItem className='trackCards'>
<span>IV</span>
<span id='songLinks'>
<a id="spotify" href={socials[6].url} aria-label="Listen to B. on Spotify"><FontAwesomeIcon icon={socials[5].icon} size="2x"/></a><a id='apple' href={socials[8].url} aria-label="Listen to B. on Apple Music"><FontAwesomeIcon icon={socials[7].icon} size="2x"/></a><a id='amazon' href={socials[9].url} aria-label="Listen to B. on Amazon Music"><FontAwesomeIcon icon={socials[9].icon} size="2x"/></a><a id='soundcloud' href={socials[10].url} aria-label="Listen to B. on SoundCloud"><FontAwesomeIcon icon={socials[10].icon} size="2x"/></a>
</span>
<span id='songTitles' style={{textDecoration: "underline"}}>B.</span>
</GridItem>

<GridItem className='trackCards'>
<span>V</span>
<span id='songLinks'>
<a id="spotify" href={socials[6].url} aria-label="Listen to R.age on Spotify"><FontAwesomeIcon icon={socials[5].icon} size="2x"/></a><a id='apple' href={socials[8].url} aria-label="Listen to R.age on Apple Music"><FontAwesomeIcon icon={socials[7].icon} size="2x"/></a><a id='amazon' href={socials[9].url} aria-label="Listen to R.age on Amazon Music"><FontAwesomeIcon icon={socials[9].icon} size="2x"/></a><a id='soundcloud' href={socials[10].url} aria-label="Listen to R.age on SoundCloud"><FontAwesomeIcon icon={socials[10].icon} size="2x"/></a>
</span>
<span id='songTitles' style={{textDecoration: "underline"}}>R.age</span>
</GridItem>

<GridItem className='trackCards'>
<span>VI</span>
<span id='songLinks'>
<a id="spotify" href={socials[6].url} aria-label="Listen to A.partofme on Spotify"><FontAwesomeIcon icon={socials[5].icon} size="2x"/></a><a id='apple' href={socials[8].url} aria-label="Listen to A.partofme on Apple Music"><FontAwesomeIcon icon={socials[7].icon} size="2x"/></a><a id='amazon' href={socials[9].url} aria-label="Listen to A.partofme on Amazon Music"><FontAwesomeIcon icon={socials[9].icon} size="2x"/></a><a id='soundcloud' href={socials[10].url} aria-label="Listen to A.partofme on SoundCloud"><FontAwesomeIcon icon={socials[10].icon} size="2x"/></a>
</span>
<span id='songTitles' style={{textDecoration: "underline"}}>A.partofme</span>
</GridItem>

<GridItem className='trackCards'>
<span>VII</span>
<span id='songLinks'>
<a id="spotify" href={socials[6].url} aria-label="Listen to prelude on Spotify"><FontAwesomeIcon icon={socials[5].icon} size="2x"/></a><a id='apple' href={socials[8].url} aria-label="Listen to prelude on Apple Music"><FontAwesomeIcon icon={socials[7].icon} size="2x"/></a><a id='amazon' href={socials[9].url} aria-label="Listen to prelude on Amazon Music"><FontAwesomeIcon icon={socials[9].icon} size="2x"/></a><a id='soundcloud' href={socials[10].url} aria-label="Listen to prelude on SoundCloud"><FontAwesomeIcon icon={socials[10].icon} size="2x"/></a>
</span>
<span id='songTitles' style={{textDecoration: "underline"}}>prelude</span>
</GridItem>

<GridItem className='trackCards'>
<span>VIII</span>
<span id='songLinks'>
<a id="spotify" href={socials[6].url} aria-label="Listen to SUN on Spotify"><FontAwesomeIcon icon={socials[5].icon} size="2x"/></a><a id='apple' href={socials[8].url} aria-label="Listen to SUN on Apple Music"><FontAwesomeIcon icon={socials[7].icon} size="2x"/></a><a id='amazon' href={socials[9].url} aria-label="Listen to SUN on Amazon Music"><FontAwesomeIcon icon={socials[9].icon} size="2x"/></a><a id='soundcloud' href={socials[10].url} aria-label="Listen to SUN on SoundCloud"><FontAwesomeIcon icon={socials[10].icon} size="2x"/></a>
</span>
<span id='songTitles' style={{textDecoration: "underline"}}>SUN</span>
</GridItem>

<GridItem className='trackCards'>
<span>IX</span>
<span id='songLinks'>
<a id="spotify" href={socials[6].url} aria-label="Listen to moon on Spotify"><FontAwesomeIcon icon={socials[5].icon} size="2x"/></a><a id='apple' href={socials[8].url} aria-label="Listen to moon on Apple Music"><FontAwesomeIcon icon={socials[7].icon} size="2x"/></a><a id='amazon' href={socials[9].url} aria-label="Listen to moon on Amazon Music"><FontAwesomeIcon icon={socials[9].icon} size="2x"/></a><a id='soundcloud' href={socials[10].url} aria-label="Listen to moon on SoundCloud"><FontAwesomeIcon icon={socials[10].icon} size="2x"/></a>
</span>
<span id='songTitles' style={{textDecoration: "underline"}}>moon</span>
</GridItem>

<GridItem className='trackCards'>
<span>X</span>
<span id='songLinks'>
<a id="spotify" href={socials[6].url} aria-label="Listen to rising.Rising.RISING. on Spotify"><FontAwesomeIcon icon={socials[5].icon} size="2x"/></a><a id='apple' href={socials[8].url} aria-label="Listen to rising.Rising.RISING. on Apple Music"><FontAwesomeIcon icon={socials[7].icon} size="2x"/></a><a id='amazon' href={socials[9].url} aria-label="Listen to rising.Rising.RISING. on Amazon Music"><FontAwesomeIcon icon={socials[9].icon} size="2x"/></a><a id='soundcloud' href={socials[10].url} aria-label="Listen to rising.Rising.RISING. on SoundCloud"><FontAwesomeIcon icon={socials[10].icon} size="2x"/></a>
</span>
<span id='songTitles' style={{textDecoration: "underline"}}>rising.Rising.RISING.</span>
</GridItem>

<GridItem className='trackCards'>
<span>XI</span>
<span id='songLinks'>
<a id="spotify" href={socials[6].url} aria-label="Listen to outro on Spotify"><FontAwesomeIcon icon={socials[5].icon} size="2x"/></a><a id='apple' href={socials[8].url} aria-label="Listen to outro on Apple Music"><FontAwesomeIcon icon={socials[7].icon} size="2x"/></a><a id='amazon' href={socials[9].url} aria-label="Listen to outro on Amazon Music"><FontAwesomeIcon icon={socials[9].icon} size="2x"/></a><a id='soundcloud' href={socials[10].url} aria-label="Listen to outro on SoundCloud"><FontAwesomeIcon icon={socials[10].icon} size="2x"/></a>
</span>
<span id='songTitles' style={{textDecoration: "underline"}}>outro</span>
</GridItem>

<GridItem className='trackCards'>
<span>XII</span>
<span id='songLinks'>
<a id="spotify" href={socials[6].url} aria-label="Listen to Stubborn (Bonus) on Spotify"><FontAwesomeIcon icon={socials[5].icon} size="2x"/></a><a id='apple' href={socials[8].url} aria-label="Listen to Stubborn (Bonus) on Apple Music"><FontAwesomeIcon icon={socials[7].icon} size="2x"/></a><a id='amazon' href={socials[9].url} aria-label="Listen to Stubborn (Bonus) on Amazon Music"><FontAwesomeIcon icon={socials[9].icon} size="2x"/></a><a id='soundcloud' href={socials[10].url} aria-label="Listen to Stubborn (Bonus) on SoundCloud"><FontAwesomeIcon icon={socials[10].icon} size="2x"/></a>
</span>
<span id='songTitles' style={{textDecoration: "underline"}}>Stubborn (Bonus)</span>
</GridItem>

</Grid>
    )
}
export default TenTwelve;
