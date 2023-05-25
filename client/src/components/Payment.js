import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import PaymentForm from './PaymentForm';


const Payment = () => {
  return (
    <Switch>
          <Route path="/" exact>
            <PaymentForm/>
          </Route>
      </Switch>
  )
}

export default Payment;