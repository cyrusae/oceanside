import { LiveReload, Outlet } from 'remix'

export default function App() {
 return (
  <html lang='en'>
   <head>
    <meta charSet='UTF-8' />
    <title>oceanside</title>
   </head>
   <body>
    <h1>Hello World</h1>
    <Outlet />
    <LiveReload />
   </body>
  </html>
 )
}