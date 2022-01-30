import React, { useState } from 'react'
import { Remark } from 'react-remark'
import remarkGfm from 'remark-gfm'


const Remarker = () => {
 const [markdownSource, setMarkdownSource] = useState('');
 
 return(
  <>
   <input 
    type='text' 
    onChange={({ currentTarget }) => setMarkdownSource(currentTarget.value)}
   />
   <Remark
    rehypePlugins={[
     function noRefCheck(){},
     function noRefCheck(){}
   ]}
   remarkToRehypeOptions={{
    allowDangerousHtml: true
   }}
   >
   {`# header
  
   <strong>mixed</strong>
   <em>with</em>
   <kbd>html</kbd>
   `}
   </Remark>
  </>
 )
}

export default Remarker;