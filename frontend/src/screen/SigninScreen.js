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
                <li>
                <label for="email">
                    Email
                </label>
                <input type="email" name="email" id="email" onCharge={(e) => setEamil(e.target.value)}>
                </input>
                </li>
             <li>
                 <label for="password">Password</label>
                 <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
                 </input>
                </li>
                <li>
                    <button type="submit" className="button-primary">Signin</button>
                </li>
                <li>
                    New to La-Drink?
                </li>
                <li>
                    <Link to="/register" className>Create your La-Drink account</Link>
                </li>
            </ul>
        </form>
    </div>

}
export default SigninScreen;