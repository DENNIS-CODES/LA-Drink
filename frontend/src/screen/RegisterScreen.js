import React, { useState, useEffect, useDispatch } from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';

function SigninScreen(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const [ rePassword, setRePassword] = useState('');
    const userRegister = useSelector(state => state.userRegister);
    const { loading, userInfo, error } = userRegister;
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
       dispatch(register(email, password)); 
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
                <label htmlfor="name">
                    Name
                </label>
                <input type="name" name="name" id="name" onCharge={(e) => setName(e.target.value)}>
                </input>
                </li>
                <li>
                <label for="email">
                    Email
                </label>
                <input type="email" name="email" id="email" onCharge={(e) => setEmail(e.target.value)}>
                </input>
                </li>
             <li>
                 <label htmlfor="password">Password</label>
                 <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
                 </input>
                </li>
                <li>
                 <label htmlfor="rePassword">Re-Enter Password</label>
                 <input type="password" id="password" name="password" onChange={(e) => setRePassword(e.target.value)}>
                 </input>
                </li>
                <li>
                    <button type="submit" className="button-primary">Signin</button>
                </li>
                <li>
                    Already have an account? <Link to="signin">Signin</Link> 
                </li>
                <li>
                    <Link to="/register" className="button secondary text-center">Create your La-Drink account</Link>
                </li>
            </ul>
        </form>
    </div>

}
export default SigninScreen;