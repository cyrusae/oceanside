export function GlacierA() {
 return (
  <aside className='glacier poem' id='III' aria-labelledby='cred_glacier'>
   <img src='/blue_quote_bg_va.png' className='fade-in' alt=''/>
   <div className='quote text-focus-in'><p><h5>III</h5>
   The glacier absorbed greenhouse gases. <br/>
   We are a large part of the biosphere.</p>
   </div>
   <div className='credit text-focus-in' id='cred_glacier'>Craig Santos Perez,<br/><cite>"Thirteen Ways of Looking at a Glacier"</cite></div>
  </aside>
 )
}

export function GlacierB() {
 return (
  <aside className='glacier poem' id='V' aria-labelledby='cred_glacier'>
  <img src='/blue_quote_bg_sm.png' id='blueq' alt='' className='fade-in'/>
   <div className='quote text-focus-in'><p><h5>V</h5>
   We do not know which to fear more,<br/>
   The terror of change<br/>
   Or the terror of uncertainty, <br/>
   The glacier calving<br/>
   Or just after.</p>
  </div>
   <div className='credit text-focus-in' id='cred_glacier'>Craig Santos Perez,<br/><cite>"Thirteen Ways of Looking at a Glacier"</cite></div>
  </aside>
 )
}

export function GlacierC() {
 return (
  <aside className='glacier poem' id='VIII' aria-labelledby='cred_glacier'>
  <img src='/blue_quote_bg.png' id='blueqm' alt='' className='fade-in'/>
   <div className='quote text-focus-in'><p><h5>VIII</h5>
   I know king tides, <br/>
   And lurid, inescapable storms; <br/>
   But I know, too, <br/>
   That the glacier is involved <br/>
   In what I know.</p>
  </div>
   <div className='credit text-focus-in' id='cred_glacier'>Craig Santos Perez,<br/><cite>"Thirteen Ways of Looking at a Glacier"</cite></div>
  </aside>
 )
}

//Unused for now, but fun to have
export function Glacier() {
 return (
  <div id='glacier'>
   <GlacierA />
   <GlacierB />
   <GlacierC />
  </div>
 )
}