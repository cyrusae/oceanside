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

### 'gradience' *(sic intentional)*, aka 'the lads', in more detail

#### *Spanner*:

- Happens once, server-side, before page load
- Works with raw HTML after remark-rehype and before being displayed
- Identifies text that is not part of an HTML tag, then uses grapheme-splitter to identify individual graphemes 
- Surrounds each grapheme with `<span className='glyph'>` and `</span>`, so they can be manipulated after page load
- Requires a Markdown compiler's output and a way to feed its results into the document 
- Its results go in a *corpse* (because it takes the raw HTML that will form the document body)

#### The *Triad*:

- After page load (lazy)
- Three functions in sequence 

##### *Vampire*:

- Uses grapheme-splitter
- Takes contents of *corpse* as they are on page load 
- Finds all graphemes that are `glyph`s in the document 
- Uses offset to find line breaks on user's screen 
- Outputs number of lines and longest line in document 

##### *Colorist*:

- Uses javascript-color-gradient and the results rendered by *Vampire*
- Has predetermined color options as constants depending on individual site color scheme 
- Creates gradients whose length is equal to that of the longest line of `glyph`s, in a number equal to how many lines *Vampire* found
- Outputs these gradients in order as its *palette* 

##### *Embalmer*:

- Takes *Vampire*'s numbers and *Colorist*'s *palette* 
- Assigns each `glyph` in the *corpse* a `style='color: '` from the *palette*, based on its relative position according to *Vampire*
- Overwrites the *corpse* in the DOM on load with this embalmed one 

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

