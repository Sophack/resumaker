import React from 'react';
import { useState } from 'react';
import PaymentForm from './CheckoutForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const DonateButton = () => {
    const [show, setShow]  = useState(false)
  return (
    <>
        {
            show?<PaymentForm/>:null
        }
      <button className='donateButton' onClick={()=>setShow(!show)}><FontAwesomeIcon icon={faCoffee} /></button>
    </>
  )
}
export default DonateButton;