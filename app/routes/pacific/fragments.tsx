// const a = Raw1.value();
import Raw1 from './fragments/test1'

const Raw = Raw1;

function Fragments() {
 return (
  <div>
   { Raw }
   Test directly in fragments
  </div>
 )
}

export default Fragments