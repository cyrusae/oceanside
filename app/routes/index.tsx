import Fragments from "./pacific/fragments";
import Raw1 from "./pacific/fragments/test1";
import { Outlet } from "remix";
import styles from '../styles/coastline.css'

export function links() {
 return [{ rel: 'stylesheet', href: styles }]
}

export default function Index() {
 return (
    <div>
     <Fragments />
     <p>Test directly in index.tsx too</p>
    </div>
  );
}
