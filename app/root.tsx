import { LiveReload, Outlet, Links } from 'remix'
import Index from './routes'
import Footer from './routes/footer'
import Wham from './routes/pacific/fragments/stripe-whamline'

// Outlet may create duplicates from index; temporarily removing `    <Outlet />`.

export default function App() {
 return (
  <html lang='en'>
   <head>
    <Links />
    <meta charSet='UTF-8' />
    <title>what the weather doesn't</title>
   </head>
   <body>
    <Outlet />
    <LiveReload />
   </body>
  </html>
 )
} 