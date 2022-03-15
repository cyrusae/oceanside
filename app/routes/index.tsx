import Fragments from "./pacific/fragments";
import Raw1 from "./pacific/fragments/test1";
import { Outlet } from "remix";
import styles from '../styles/coastline.css'
import { GlacierA, GlacierB, GlacierC } from "./pacific/fragments/poem-glacier";
import WAVE from "./pacific/fragments/poem-wave";
import Wham from "./pacific/fragments/stripe-whamline";
import Footer from "./footer";
import Define from "./pacific/fragments/quote-clime";
import LetSay from "./pacific/fragments/poem-letsay";
import Ode from "./pacific/fragments/poem-ode";
import { ChiGar1, ChiGar2 } from "./pacific/fragments/photos_chi";
import Garden from "./pacific/fragments/photos_chi";

export function links() {
 return [{ rel: 'stylesheet', href: styles }]
}

export default function Index() {
 return (
  <div id='oceanside'>
   <div id='water'>
    <div id='beach'>
     <Garden />
     <Fragments />
     <Ode />
     <GlacierA />
     <ChiGar1 />
     <Define />
     <GlacierB />
     <ChiGar2 />
     <WAVE />
     <GlacierC />
    </div>
   </div>
   <Wham />
   <Footer />
  </div>
 );
}
