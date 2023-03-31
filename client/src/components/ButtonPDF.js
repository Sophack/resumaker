import React from 'react'
import PDF from './PDF';
import { useState } from 'react';

const PDFbutton = () => {

    const [show, setShow]  = useState(true)
  return (
    <div>
      {
          show?<PDF/>:null
        }
      <button className='donateButton' onClick={()=>setShow(!show)}>PDF</button>
    </div>
  )
}

export default PDFbutton
