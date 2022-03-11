//Export not currently working

export function ChiGar() {
 var coin = Math.random();
 if (coin < 0.5) { var flip = 'heads'} else { var flip = 'tails'; };
 switch (flip) {
  case 'heads':
  return (
   <div id='Charden' className='hero flip-in-hor-top'>
    <div className='img'>
     <img src='/photos/chi_ver_gard1.jpeg' />
    </div>
   </div>
  )
  break;
 case 'tails':
  return (
      <div id='Charden' className='hero flip-in-hor-top'>
    <div className='img'>
     <img src='/photos/chi_ver_gard2.jpeg' />
    </div>
   </div>
  )
 }
}