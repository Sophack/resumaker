//redirect payment form & has access to history 
import {withRouter} from 'react-router-dom';
//cdc & postal code elements 
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';

const PaymentForm = () => {

    //hooks
    const elements = useElements();
    //returns a ref to the stripe instance that was passed down to the elements provider 
    const stripe = useStripe();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!stripe || !elements) {
            return;
        }
        
        const cardElement = elements.getElement(CardElement);
        console.log(cardElement)

    }

  return ( 
 <form onSubmit={handleSubmit}>
    <CardElement/> 
    
    <button className='donateButton'>Click to Donate ☕</button>
    </form>
)
}

export default withRouter(PaymentForm);