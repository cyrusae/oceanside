const faces = ['aguila', 'sol']

const flip = (() => {
  let pick;
  if (Math.random() < 0.5) {
   pick = 0;
  } else {
   pick = 1;
  }
  return faces[pick];
 })

export default function Garden() {
 const gardenMe = () => {
   if (flip() === 'aguila') {
   return <ChiGar1 />;
  } else {
   return <ChiGar2 />;
  }
 }

 return (
  <>
   {gardenMe()}
  </>
 )
}

export function ChiGar1() {
 return (
   <div id='Charden1' className='hero flip-in-hor-top' role='img'>
    <div className='img'>
     <img src='/photos/chi_ver_gard1.jpeg' alt='' />
    </div>
   </div>
  )
 }
 
 export function ChiGar2() {
  return (
   <div id='Charden2' className='hero flip-in-hor-top' role='img'>
    <div className='img'>
     <img src='/photos/chi_ver_gard2.jpeg' alt=''/>
    </div>
   </div>
  )
}