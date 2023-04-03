import React from 'react'
import PDF from './PDF';
import { useState } from 'react';

const PDFbutton = () => {

    const [show, setShow]  = useState(false)
    
  return (
    <div>
      {
          show?<PDF/>:null
        }
      <button className='pdfButton' onClick={()=>setShow(!show)}>PDF</button>
    </div>
  )
}

export default PDFbutton