export function GlacierA() {
 return (
  <div className='glacier poem' id='III'>
   <img src='/blue_quote_bg_va_ph.png' className='fade-in PLACEHOLDER'/>
   <div className='quote text-focus-in'><p><h5>III</h5>
   The glacier absorbed greenhouse gases. <br/>
   We are a large part of the biosphere.</p>
   </div>
   <div className='credit text-focus-in'>Craig Santos Perez,<br/>"Thirteen Ways of Looking at a Glacier"</div>
  </div>
 )
}

export function GlacierB() {
 return (
  <div className='glacier poem' id='V'>
  <img src='/blue_quote_bg_sm.png' id='blueq' className='fade-in'/>
   <div className='quote text-focus-in'><p><h5>V</h5>
   We do not know which to fear more,<br/>
   The terror of change<br/>
   Or the terror of uncertainty, <br/>
   The glacier calving<br/>
   Or just after.</p>
  </div>
  <div className='credit text-focus-in'>Craig Santos Perez,<br/>"Thirteen Ways of Looking at a Glacier"</div>
  </div>
 )
}

export function GlacierC() {
 return (
  <div className='glacier poem' id='VIII'>
  <img src='/blue_quote_bg.png' id='blueqm' className='fade-in'/>
   <div className='quote text-focus-in'><p><h5>VIII</h5>
   I know king tides, <br/>
   And lurid, inescapable storms; <br/>
   But I know, too, <br/>
   That the glacier is involved <br/>
   In what I know.</p>
  </div>
  <div className='credit text-focus-in'>Craig Santos Perez,<br/>"Thirteen Ways of Looking at a Glacier"</div>
  </div>
 )
}

export function Glacier() {
 return (
  <div id='glacier'>
   <GlacierA />
   <GlacierB />
   <GlacierC />
  </div>
 )
}