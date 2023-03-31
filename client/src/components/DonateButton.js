import React from 'react';
import { useState } from 'react';
import PaymentForm from './CheckoutForm';

const DonateButton = () => {

    const [show, setShow]  = useState(false)

  return (
    <div>
        {
            show?<PaymentForm/>:null
        }
      <button className='donateButton' onClick={()=>setShow(!show)}>Donate ☕</button>
    </div>
  )
}

export default DonateButton
