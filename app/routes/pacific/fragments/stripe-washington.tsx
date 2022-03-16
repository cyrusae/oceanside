//function visibleCap(e) {
 //e.target.style.visibility = 'visible';
//}
//Multiple attempts being made to get the caption conditional display to work as intended 

const cap_wa = '"Warming stripes" visualization for the state of Washington, showing an overall increase in warm years and the near-vanishment of cold ones, from 1895 to 2021.'

export default function Washington() {
 return (
  <div id='Washington' className='flip-in-hor-top hero' role='img'>
   <div className='img'>
    <img src='/stripes_wa.png' alt='' aria-describedby='cap_wa'></img>
    <div className='captimg'><div id='cap_wa'>{cap_wa}</div></div>
   </div>
  </div>
 )
}