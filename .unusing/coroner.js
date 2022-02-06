// Convert to TS later, when I have figured out how to make it stop yelling at marked 
import marked from 'marked'
import Spanner from 'spanner'

export default function Coroner(raw) {
 const meat = marked(raw);
 const corpse = Spanner(meat);
 return (
  <div className='corpse'>
   { corpse }
  </div>
 )
}