

const cap_oh = '"Warming stripes" visualization for the state of Ohio, showing an overall increase in warm years and the near-vanishment of cold ones, from 1895 to 2021.'


export default function Ohio() {
 return (
  <div id='Ohio' className='flip-in-hor-top hero' role='img' aria-describedby='cap_oh'><img src='/stripes_oh.png' alt='' />
   <button type='button' className='secret' aria-hidden='true'>  
    <div id='cap_oh' className='ARIAcap' aria-hidden='true'>{cap_oh}</div></button>
  </div>
 )
}