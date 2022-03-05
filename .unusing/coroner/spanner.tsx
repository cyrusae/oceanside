import GraphemeSplitter from "grapheme-splitter";

const tagOpen: string = '<'
const tagClose: string = '>'
const otherChar: string = '/\w/'
//const otherChar = new RegExp('/\w/')

export default function Cursed(meat: string) {
 let corpse = [];
 let raw = meat;

 let tagsFound = [];
 for (let i = 0; i < raw.length; i++) {
  if (raw[i] === tagOpen) {
   tagsFound.push(i);
  } else if (raw[i] === tagClose) {
   tagsFound.push(i + 1);
  }
 }

 let morgue = [] //corpses have toe tags
 
 for (let i = 1; i < tagsFound.length; i++) {
  morgue.push(raw.slice(tagsFound[i - 1], tagsFound[i]));
 }

 for (let i = 0; i < morgue.length; i++) {
  let slab = morgue[i];
  if (slab.startsWith(tagOpen) && slab.endsWith(tagClose)) {
   corpse.push(slab);
  } else {
   let scalpel = new GraphemeSplitter();
   
   let start = slab.indexOf(otherChar);
   let stop = slab.lastIndexOf(otherChar);
   //This may or may not fix the issue where TS is failing on attempt to use a regular expression for this part 

   let autopsy = [];
   
   if (start === -1 || stop === -1) {
    let sample = scalpel.splitGraphemes(slab);
    autopsy.push(sample);
   } else if (stop === -1) {
    let report = slab.slice(start);
    let sample = scalpel.splitGraphemes(report);
    autopsy.push(slab.slice(0, start) + sample);
   } else {
    let report = slab.slice(start, (stop + 1));
    let sample = scalpel.splitGraphemes(report);
    autopsy.push(slab.slice(0, start) + sample + slab.slice(stop))
   }

   let murder = autopsy.flat();
   
   for (let i = 0; i < murder.length; i++) {
    corpse.push('<span class="glyph">' + murder[i] + '</span>')
   }
  }
 }

 return corpse.join('');
}