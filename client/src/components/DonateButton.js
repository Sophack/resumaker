import React from 'react';
import { useState } from 'react';
import PaymentForm from './CheckoutForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const DonateButton = () => {

    const [show, setShow]  = useState(false)

  return (
    <div>
        {
            show?<PaymentForm/>:null
        }
      <button className='donateButton' onClick={()=>setShow(!show)}>Donate <FontAwesomeIcon icon={faCoffee} /></button>
    </div>
  )
}

export default DonateButton
