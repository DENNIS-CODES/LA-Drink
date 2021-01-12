import React, { useState, useEffect, useDispatch } from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';

function SigninScreen(props) {
    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {

        return () => {
            //
        };
    }, []);
    
    return <div classname="form">
        <form onSubmit={submitHandler} >
            <ul className="form-conatiner">
                <label for="email">
                    Email
                </label>
                <input type="email" name="email" id="email" onCharge{(e) => setEamil}
            </ul>
        </form>
    </div>

}
export default SigninScreen;