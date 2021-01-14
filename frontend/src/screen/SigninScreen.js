import React, { useState, useEffect, useDispatch } from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';

function SigninScreen(props) {
    const [email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const { loading, userInfo, error } = userSignin;
    const dispatch = useDispatch();

    useEffect(() => {
        if (userInfo) {
           props.history.push("/"); 
        }
        return () => {
            //
        };
    }, [userInfo]);
    const submitHandler = (e) =>{
       e.preventDefault();
       dispatch(signin(email, password)); 
    }
    
    
    return <div classname="form">
        <form onSubmit={submitHandler} >
            <ul className="form-conatiner">
                <li>
                    <h2>Sign-In</h2>
                </li>
                <li>
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                <label for="email">
                    Email
                </label>
                <input type="email" name="email" id="email" onCharge={(e) => setEamil(e.target.value)}>
                </input>
                </li>
             <li>
                 <label htmlfor="password">Password</label>
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
                    <Link to="/register" className="button secondary text-center">Create your La-Drink account</Link>
                </li>
            </ul>
        </form>
    </div>

}
export default SigninScreen;