import { LiveReload, Outlet } from 'remix'
import Index from './routes'

export default function App() {
 return (
  <html lang='en'>
   <head>
    <meta charSet='UTF-8' />
    <title>oceanside</title>
   </head>
   <body>
    <Outlet />
    <Index />
    <LiveReload />
   </body>
  </html>
 )
}