import Fragments from "./pacific/fragments";
import Raw1 from "./pacific/fragments/test1";
import { Outlet } from "remix";
import styles from '../styles/coastline.css'
import { GlacierA, GlacierB, GlacierC } from "./pacific/fragments/poem-glacier";
import WAVE from "./pacific/fragments/poem-wave";
import Wham from "./pacific/fragments/stripe-whamline";
import Footer from "./footer";

export function links() {
 return [{ rel: 'stylesheet', href: styles }]
}

export default function Index() {
 return (
    <div id='water'>
     <div id='beach'>
     <Fragments />
     <GlacierA />
     <GlacierB />
     <WAVE />
     <GlacierC />
     
     <Wham />
    </div>
         <Footer />
</div>
  );
}
