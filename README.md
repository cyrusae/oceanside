# project tag oceanside 

Format: Remix.js website

Purpose: Hosting CHID 480 final project 
- (Static content, dynamic rendering, read-only)

Status: Work in progress 

Status of this page: Also a work in progress 

## contents 

### text 

Prose divided into sections as .md files. Displayed as a single column (full-width for narrow screens, fixed-width for wider ones).

### images

- Background image scrolling slowed in relation to the text to create the subjective sense that the background image is longer.
- Additional backdrops for specific sections of prose scroll in and out with their corresponding divs.
- Foreground images for emphasis and section breaks animate on scroll in and out to guide reader attention.

### audio 

Environmental sound components tied to specific sections of prose. Fade in and out on scroll.

### metadata / other

Need adjacent credits page explaining project, media sources, context, links/about me. Alternate theme (different font type, inverted colors, no background image, etc.) to make it more clearly "backstage".

## technical

### generating sections

*Photographer* takes an image src, alt text, foreground text if being used as a quote background, and intended display preferences, and outputs the code for a *picture*.

*Listener* takes the file path for a piece of audio and information about how and whether to a) fade and b) repeat, and outputs the code for a *sound*.

*Coroner* takes an .md file through remark, rehype, and *Spanner*, producing the code for a *corpse*. (A *corpse* is any div intended to be subject to the *Triad* after loading.) This staggers gradient generation/application.

A *scene* is a combination of one or more *corpse*s, up to one *sound*, up to one static and one scrolling background *picture*, and any foreground *picture*s.

All *scene*s in an *argument* share a single background image (special case of *picture*). 

### displaying the result

The end result for the main page is one or more *argument*s in order (i.e. groups of *scene*s, comprising *corpse*s and their decorations, forming the essay body), followed by a *footer*.

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

**To do:** Determine how *Triad* will interact with the possibility of different background color needs on the same page.

### image formatting

#### Possible image roles: 

##### Background (z-index less than the *corpse*(s) in a *scene*):

- Background of an *argument* (pseudo-static, scroll speed determined by need to fill the length of the *argument* without repeating or ending)
- Background of a *scene* (pseudo-static, z-index greater than that of its parent *argument*)
- Superimposed backdrop of a *fragment* (vertical animation)

##### Foreground (z-index equal to or greater than the *corpse*(s) in a *scene*):

- Section break image (at the end of one *scene*, subjectively appears to be between *scene*s; always full-width relative to the text)
- Accent image (within a *scene*)
- Quote background (acts like an accent image but holds formatted foreground text)

###### 'Stretch goals' for foreground images:

- Make text flow/wrap around non-section break images on large screens
- Make those images exceed main column width (staggered next to text) on very large screens 

This may not be possible while keeping the gradients working; large screens are not my priority regardless.

### stylesheet(s)

- Light text on dark (override for *scene*s with special-case backgrounds), sans-serif body text
- Links in monospace 
- Flexbox (in most cases, a single column with sequential rows; see 'Stretch goals')

#### Image types and their needs:

##### Backgrounds:

- Need a fallback background color that will interact similarly with the text 
- Parallax animation to create sense that the background is the same height as the text is long 
- If of a *scene* requiring different text colors, specify alternate text color

##### Backdrops (the hovering ones):

- Backdrops' failure state is "does not display", nothing is dependent on this 
- Backdrops need enter/exit animations including how long to hang around scrolling along with the text 

##### Foreground images:

- Need a 'background' of themselves blurred in order to create some desired effects 
- Specify any effects on entering or leaving viewport
- Specify maximum width and relevant behavior: full width with regards to text? what if that's too large?
- Alt text displayed on click (?)

##### Highlight quotes:

- Image is itself a background; need fallback background color to match
- Format text within the image: serif, appropriate colors
- **How to:** make the text resize so that it's always going to fit inside a div whose size is defined by the size of the background image?

#### Credits page:

- Dark text on light, serif body text

## resources

### image sources

- pngtree (superimposed backdrops and quote backgrounds)
- NASA (aerial smoke and storm photography)
- [warming stripes](https://showyourstripes.info) (*argument* backgrounds)
- personal/family (weather in Washington and Mexico)

### audio

- [mixkit rain sounds](https://mixkit.co/free-sound-effects/rain/)

### other

- [animista css animations](https://animista.net/play/entrances)

# notes on idiosyncracies 

- If the text is large to you that's because I made it
- Unforeseen bugs/breaking may happen at very large screen sizes and/or if you force a reduced text size

## names

### variable hierarchy in this project

##### Simple names:

- *picture*: images, made by *Photographer*
- *sound*: background audio, made by *Listener*

##### Themed names:

1. *corpse* is the canonical name for body text modified by *Spanner* and the rest; *Coroner* arranges *corpse*s
2. As a result, this project uses *scene*s to bridge the theme gap between what *gradience* makes and something more straightforward: "murder scenes" (full of *corpse*s) become "scenes" of the essay
3. This makes it easy for *scene*s to come together to make *argument*s without interrupting the flow of internally consistent variables at any individual point
4. I do genuinely consider this a priority because the way my brain works means it makes my code easier to read for me (me)

### gradience 

- Named due to its production of gradients ("brother may I have some gradience", as per oäts)
- Also known as "lads" in order to encapsulate "*Spanner* and the Triad"
- *Spanner* sometimes also is called *Cursed* to commemorate the majority of people's responses while I was writing it 
- The Triad is called that because I couldn't think of another word for three things that go together on the spot
- *Vampire* counts things; *Colorist* is not particularly unintuitive; *Embalmer* prettifies the *corpse*.
