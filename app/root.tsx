import { LiveReload, Outlet, Links } from 'remix'
import Index from './routes'

// Outlet may create duplicates from index; temporarily removing `    <Outlet />`.

export default function App() {
 return (
  <html lang='en'>
   <head>
    <Links />
    <meta charSet='UTF-8' />
    <title>oceanside</title>
   </head>
   <body>
    <Index />
    <LiveReload />
   </body>
  </html>
 )
}