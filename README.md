# project tag oceanside 

Format: Remix.js website

Purpose: Hosting CHID 480 final project 
- (Static content, dynamic rendering, read-only)

Status: Work in progress 

Status of this page: Also a work in progress 

## contents 

### text 


### images

- Background image scrolling slowed in relation to the text to create the subjective sense that the background image is longer.
- Additional backdrops for specific sections of prose scroll in and out with their corresponding divs.
- Foreground images for emphasis and section breaks animate on scroll in and out to guide reader attention.

### audio 

Environmental sound components tied to specific sections of prose. Fade in and out on scroll.

### metadata / other


## technical

### text formatting

- Markdown parsed by remark-rehype (outside library) and modified by *Spanner* (personal) 
- Gradient text colors generated in response to screen width after load (personal projects *Vampire*/*Colorist*/*Embalmer* aka *Triad*, outside libraries javascript-color-gradient and grapheme-splitter) for ease of reading 

#### 'gradience' *(sic intentional)*, aka 'the lads', in more detail

##### *Spanner*:

- Works with raw HTML after remark-rehype and before being displayed
- Identifies text that is not part of an HTML tag, then uses grapheme-splitter to identify individual graphemes 
- Surrounds each grapheme with `<span className='glyph'>` and `</span>`, 

### image formatting


### generating sections

*Photographer* takes an image src, alt text, foreground text if being used as a quote background, and intended display preferences, and outputs the code for a *picture*.

*Listener* takes the file path for a piece of audio and information about how and whether to a) fade and b) repeat, and outputs the code for a *sound*.

*Stenographer* takes an .md file through remark, rehype, and *spanner*, producing the code for an *evidence*.

A *fragment* is a combination of one or more *evidence*, up to one *sound*, up to one static and one scrolling background *picture*, and any foreground *picture*s.

A *corpse* is any div intended to be subject to *Spanner* before loading and the *Triad* after. 

All *fragment*s in a *corpse* share a single background image (special case of *picture*). This staggers gradient generation/application if the text grows to the point of requiring multiple background images.

## resources

### images


### audio

