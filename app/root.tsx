import { LiveReload, Outlet, Links } from 'remix'
import Index from './routes'
import Footer from './routes/footer'

// Outlet may create duplicates from index; temporarily removing `    <Outlet />`.

export default function App() {
 return (
  <html lang='en'>
   <head>
    <Links />
    <meta charSet='UTF-8' />
    <title>oceanside</title>
    <script src='/hed.js'></script>
    <script src='/parallax.js'></script>
    <script src='/jed.js'></script>
   </head>
   <body>
   <div className='viewport'>
   <div className='magic-filled-pixel'></div>
   <div id='overflow'>
   <div className='container'>
   <div className='parallax'></div>
   <div id='clime'>
    <div id='beach' className='solid scene'>
    <div className='magic-pixel'></div>
    <Outlet />
    </div>
    <Footer /> 
    <LiveReload />
   </div>
   </div>
   </div>
   </div>
   </body>
  </html>
 )
}