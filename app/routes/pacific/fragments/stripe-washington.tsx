//function visibleCap(e) {
 //e.target.style.visibility = 'visible';
//}
//Multiple attempts being made to get the caption conditional display to work as intended 

import React, { useState, useEffect } from 'react';

const cap_wa = '"Warming stripes" visualization for the state of Washington, showing an overall increase in warm years and the near-vanishment of cold ones, from 1895 to 2021.'


export default function Washington() {


 return (
  <div id='Washington' className='flip-in-hor-top hero' role='img' aria-describedby='cap_wa'><img src='/stripes_wa.png' alt='' />
   <button type='button' className='secret' aria-hidden='true'>  
    <div id='cap_wa' className='ARIAcap' aria-hidden='true'>{cap_wa}</div></button>
  </div>
 )
}

//Not using right now: 
// const [see, setSee] = useState('unsee');
//onFocus={() => {
  //   const [see, setSee] = useState('showCap')
  //  }}
  //  onBlur={() => {
  //   const [see, setSee] = useState('')
  //  }}
  //    { useState('showCap') || <div>{cap_wa}</div> }