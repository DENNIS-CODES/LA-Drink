import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { savePayment } from '../actions/cartAction';
import CheckoutSteps from '../components/CheckoutStep'

function PaymentScreen(props) {
  const [paymentMethod, setPaymentMethod] = useState('');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment({ paymentMethod }));
    props.history.push('placeorder');
  };
    
    
    return <div>
    <CheckoutSteps step1 step2 step3></CheckoutSteps>
    <div className="form">
      <form onSubmit={submitHandler} >
        <ul className="form-container">
          <li>
            <h2>Payment</h2>
                    </li>
                    <div>
                      <input type="radio" name="payment" id="paymentMethod" onChange={(e) => setPaymentMethod(e.target.value)}>
                        </input>
                        <label for="paymentMethod">Paypal</label>
                        </div>
                <li>
                    <button type="submit" className="button-primary">Continue</button>
                </li>
            </ul>
        </form>
    </div>
    </div>

}
export default PaymentScreen;