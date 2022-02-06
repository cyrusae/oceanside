import mdxLoader from '@mdx-js/loader';
import React, { useEffect, useState } from 'react'
import marked from 'marked'


let content = '`I swear, I *will* make this work`'
// var output = mdxLoader(this, string: content);
var output = marked(content)

function Raw1() {
 return (
  { output }
 )
}

export default output 