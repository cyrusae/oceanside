const cap_here = 'Screenshot of a section of a satelite map of the globe. Find the end of the American California; here, San Diego. Go as straight of south as you can get for a thousand miles on the only highway, until you hit the point where the Tropic of Cancer meets the Pacific coastline. This is Todos Santos. You are here.'

export default function Odile() {
 const odile = () => {
  var pick = Math.floor(Math.random() * 6);
  if (pick === 0) { return ( <Odile1 /> )} 
  else if (pick === 1) { return ( <Odile2 /> )} 
  else if (pick === 2) { return ( <Odile3 /> )}
  else if (pick === 3) { return ( <Odile4 /> )}
  else if (pick === 4) { return ( <Odile5 /> )}
  else { return ( <Odile6 /> )}
 }

 return (
  <div id='Odile'>
   {odile()}
  </div>
 )
}

export function Odile1() {
 return (
   <div id='Odile1' className='hero flip-in-hor-top' role='img'>
    <div className='img'>
     <img src='/photos/odile - sept 15-01.jpg' alt='' />
    </div>
   </div>
  )
 }

 export function Odile2() {
 return (
   <div id='Odile2' className='hero flip-in-hor-top' role='img'>
    <div className='img'>
     <img src='/photos/odile - sept 15-02.jpg' alt='' />
    </div>
   </div>
  )
 }

 export function Odile3() {
 return (
   <div id='Odile1' className='hero flip-in-hor-top' role='img'>
    <div className='img'>
     <img src='/photos/odile - sept 15-03.jpg' alt='' />
    </div>
   </div>
  )
 }

 export function Odile4() {
 return (
   <div id='Odile4' className='hero flip-in-hor-top' role='img'>
    <div className='img'>
     <img src='/photos/odile - sept 15-04.jpg' alt='' />
    </div>
   </div>
  )
 }

 export function Odile5() {
 return (
   <div id='Odile5' className='hero flip-in-hor-top' role='img'>
    <div className='img'>
     <img src='/photos/odile - sept 15-15.jpg' alt='' />
    </div>
   </div>
  )
 }

 export function Odile6() {
 return (
   <div id='Odile6' className='hero flip-in-hor-top' role='img'>
    <div className='img'>
     <img src='/photos/odile - sept 15-17.jpg' alt='' />
    </div>
   </div>
  )
 }