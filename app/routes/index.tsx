import Fragments from "./pacific/fragments";
import styles from '../styles/coastline.css'
import { GlacierA, GlacierB, GlacierC } from "./pacific/fragments/poem-glacier";
import WAVE from "./pacific/fragments/poem-wave";
import Wham from "./pacific/fragments/stripe-whamline";
import Footer from "./footer";
import Define from "./pacific/fragments/quote-clime";
import Ode from "./pacific/fragments/poem-ode";
import Garden from "./pacific/fragments/photos_chi";
import WinSum from "./pacific/fragments/poem-winsum";

export function links() {
 return [{ rel: 'stylesheet', href: styles }]
}

export default function Index() {
 return (
  <div id='oceanside'>
   <main id='water'>
    <div id='beach'>
     <Fragments />
     <Ode />
     <GlacierA />
     <Garden />
     <Define />
     <WinSum />
     <GlacierB />
     <WAVE />
     <GlacierC />
    </div>
   </main>
   <Wham />
   <Footer />
  </div>
 );
}
