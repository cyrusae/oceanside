export function GlacierA() {
 return (
  <div>
  <div className='glacier' id='III'>
   <img src='/blue_quote_bg.png' id='blueq'/>
   <div className='quote'><p><h5>III</h5>
   The glacier absorbed greenhouse gases. <br/>
   We are a large part of the biosphere.</p>
   </div>
   <div className='credit'>Craig Santos Perez,<br/>"Thirteen Ways of Looking at a Glacier"</div>
  </div>
  </div>
 )
}

export function GlacierB() {
 return (
  <div className='glacier' id='V'>
  <img src='/blue_quote_bg.png' id='blueq'/>
   <div className='quote'><p><h5>V</h5>
   We do not know which to fear more,<br/>
   The terror of change<br/>
   Or the terror of uncertainty, <br/>
   The glacier calving<br/>
   Or just after.</p>
  </div>
  <div className='credit'>Craig Santos Perez,<br/>"Thirteen Ways of Looking at a Glacier"</div>
  </div>
 )
}

export function GlacierC() {
 return (
  <div className='glacier' id='VIII'>
  <img src='/blue_quote_bg.png' id='blueq'/>
   <div className='quote'><p><h5>VIII</h5>
   I know king tides, <br/>
   And lurid, inescapable storms; <br/>
   But I know, too, <br/>
   That the glacier is involved <br/>
   In what I know.</p>
  </div>
  <div className='credit'>Craig Santos Perez,<br/>"Thirteen Ways of Looking at a Glacier"</div>
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