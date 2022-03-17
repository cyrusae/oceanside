export default function LetSay() {
 return (
  <aside id='LetSay' className='poem' aria-labelledby='cred_letsay'>
   <img src='/red_quote_bg.png' className='fade-in' />
   <div className='quote text-focus-in'>
    <p>Let them say, as they must say something:</p>
    <p>A kerosene beauty.<br/>
    It burned.</p>
    <p>Let them say we warmed ourselves by it,<br/>
    read by its light, praised,<br/>
    and it burned.</p>
   </div>
   <div className='credit' id='cred_letsay'>
    Jane Hirshfield,<br/><cite>"Let Them Not Say"</cite>
   </div>
  </aside>
 )
}