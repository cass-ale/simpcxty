# Source File Audit Results

## Summary of Issues Found

### HIGH Severity
- SubForm.js: Hardcoded Google Script URL (security risk)
- TenTwelve.js: Anchor tags missing aria-labels for accessibility

### MEDIUM Severity
- App.js: Entire old component tree is commented out (dead code)
- ContactForm.js: Unused imports (React, Box, Heading, Text, Input, Textarea, FormControl, FormLabel, FormErrorMessage, VStack, useToast)
- Hero.js: Unused imports (React, Box, Heading, Text, Img, Grid, GridItem)
- Store.js: Unused imports (React, Box, Heading, Text, Img, Grid, GridItem)
- ContactPage.js: Unused imports (React, Box, Heading, Text, Img, Grid, GridItem, Flex)
- Home.js (Pages): Unused imports (React, Box, Heading, Text, Img, Grid, GridItem)
- Scroll.js: Unused imports (React, Box, Heading, Text, Img, Grid, GridItem)
- Sub.js: Unused imports (React, Box, Heading, Text, Img, Grid, GridItem)
- Contact.js (newVersion): Unused import (React)
- Music.js: Empty footer element, inconsistent styling
- MusicHeader.js: Component named HomeHeader but file is MusicHeader.js
- SubForm.js: useEffect missing dependency array, alert() in production
- socials.js: Duplicate icon entries with different URLs
- Loader.js: "NATTY BABY!" stale reference, missing accessibility
- simp.modules.css: Commented-out animation, unused keyframes, excessive !important

### LOW Severity
- Multiple files: Unused React import (not needed in React 17+)
- Multiple files: Commented-out code blocks
- Various naming inconsistencies across CSS
