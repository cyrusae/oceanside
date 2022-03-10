import styles from '~/styles/airspace.css'

export function links() {
 return [{ rel: 'stylesheet', href: styles }]
}

export default function Metadata() {
 return ( 
  <div id='metadata'>
   <div id='project' className='credit about'><h3>About <i>what the weather doesn't</i></h3>
   <p>This essay was first composed as a final project for CHID 480-A "Upside Down Thinking With the Global South", winter quarter 2022, at the University of Washington. With the exception of specific epigraphs and quotes (see below), all content was produced by Cyrus Eosphoros. Version 1.0 is live as of March 18, 2022; technical improvements are planned but the core content and presentation is in place. If it interests you to do so, <a href='https://github.com/cyrusae/oceanside'>the source code can be viewed on GitHub</a>.</p></div>
   <div id='me' className='credit about'><h3>About the author</h3>
   <p>Cyrus Eosphoros is having a time of it at all possible times. More work, like and unlike <i>weather</i> alike, can be found and supported <a href='https://patreon.com/eosphoros'>on his Patreon</a> for now. Other technical projects have a home <a href='https://github.com/cyrusae'>on GitHub</a> alongside this one. He also has <a href='https://visuality.carrd.co'>this cool virtual business card</a> for hopefully remembering to update important data with.</p></div>
   <div id='credits' className='credit sources'><h3>Credits and third party sources</h3>
   <h5>Text</h5>
   Poems quoted:
   <ul>
    <li>"Thirteen Ways of Looking at a Glacier" by Craig Santos Perez</li>
    <li>"Let Them Not Say" by Jane Hirshfield</li>
    <li>"WAVE AFTER WAVE" by M. Bartley Seigel</li>
    <li>"No Longer Ode" by Urayoán Noel</li>
   </ul>
   Other sources:
   <ul></ul>
   <h5>Images</h5>
   <p>Climate stripes generated via <a href='https://showyourstripes.info'>Show Your Stripes</a>.</p>
   <p>Todos Santos photographs copyright Howard Ekman, used with permission.</p>
   <p>Seattle smoke summer photographs depict the Chihuly Sculpture Garden at Seattle Center and are by the author.</p>
   <p>Aerial climate photographs by NASA.</p>
   Image assets from PNGtree:
   <ul>
    <li><a href='https://pngtree.com/freepng/heavy-snow_3723954.html'>"heavy snow" background</a></li>
    <li>Black clouds background</li>
    <li>Black mist background #1</li>
    <li>Black mist background #2</li>
    <li>Fire and sparks background</li>
   <li><i>Frames used for "Thirteen Ways of Looking at a Glacier":</i>
   <ul>
    <li>Blue smoke frame #1</li>
    <li>Blue smoke frame #2</li>
    <li><a href='https://pngtree.com/freepng/blue-smoke-abstract-frame-art-free-png-and-psd_5512814.html'>Blue smoke frame #3</a></li>
   </ul></li>
   <li><i>Frames used for other quotes:</i>
   <ul>
    <li>Red and black smoke frame</li>
    <li>Dark blue smoke frame</li>
    <li>Purple watercolor smoke frame</li>
    <li>Cool colors smoke frame
    </li>
    <li>Circular cyan frame</li>
   </ul></li>
   </ul></div>
   <div id='respects' className='credit about'><h3>Acknowledgments</h3>
   Specific thanks to:
   <ul>
    <li>Tony, for letting me get away with this in the first place</li>
   </ul></div>
   <div id='goback'><a href='/'>Back to the essay</a></div>
  </div>
  ) }
