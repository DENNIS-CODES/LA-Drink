import React, { useState, useEffect, useDispatch } from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';

function SigninScreen(props) {
    const [email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {

        return () => {
            //
        };
    }, []);
    const submitHandler = (e) =>{
       e.preventDefault(); 
    }
    
    
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
                    <Link to="/register" className="button-fullwin">Create your La-Drink account</Link>
                </li>
            </ul>
        </form>
    </div>

}
export default SigninScreen;