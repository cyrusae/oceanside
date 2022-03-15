//Would like to randomize between 1 and 2 sometime 
import React, {useMemo, useState} from 'react';
const faces = ['aguila', 'sol']

export default function Garden() {
 const [selectedFace, setSelectedFace] = useState('');
 const [flipResult, setFlipResult] = useState('');

 const flip = () => {
  let pick;
  if (Math.random() < 0.5) {
   pick = 0;
  } else {
   pick = 1;
  }
  setFlipResult(faces[pick]);
 }

 const whichSelectedFace = useMemo(() => {
  const face = faces.find((f) => f !== selectedFace);
  return face;
 }, [selectedFace]);

 const eagle = useMemo( () => {
  return flipResult === selectedFace;
 }, [flipResult, selectedFace]);

 console.log(flipResult);

 const gardenMe = () => {
   if (eagle === true) {
   return <ChiGar1 />;
  } else if (eagle === false) {
   return <ChiGar2 />;
  }
 }

 return (
  <div>
   {gardenMe()}
  </div>
 )
}

export function ChiGar1() {
 return (
   <div id='Charden1' className='hero flip-in-hor-top'>
    <div className='img'>
     <img src='/photos/chi_ver_gard1.jpeg' />
    </div>
   </div>
  )
 }
 
 export function ChiGar2() {
  return (
   <div id='Charden2' className='hero flip-in-hor-top'>
    <div className='img'>
     <img src='/photos/chi_ver_gard2.jpeg' />
    </div>
   </div>
  )
}