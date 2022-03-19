const cap_here = 'Screenshot of a section of a satelite map of the globe. Find the end of the American California; here, San Diego. Go as straight of south as you can get for a thousand miles on the only highway, until you hit the point where the Tropic of Cancer meets the Pacific coastline. This is Todos Santos. You are here.'


export default function Here() {
 return (
  <div id='Here' className='flip-in-hor-top hero' role='img' aria-describedby='cap_here'><img src='/you_are_here.png' alt='' />
   <button type='button' className='secret' aria-hidden='true'>  
    <div id='cap_here' className='ARIAcap' aria-hidden='true'>{cap_here}</div></button>
  </div>
 )
}