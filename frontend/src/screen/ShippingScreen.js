import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userAction';

function ShippingScreen(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
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
       dispatch(register(name, email, password)); 
    }
    
    
    return <div classname="form">
        <form onSubmit={submitHandler} >
            <ul className="form-conatiner">
                <li>
                    <h2>hipping</h2>
                </li>
                <li>
                <label htmlfor="address">
                    Address
                </label>
                <input type="text" name="address" id="address" onCharge={(e) => setAddress(e.target.value)}>
                </input>
                </li>
                <li>
                <label htmlfor="address">
                    Address
                </label>
                <input type="text" name="address" id="address" onCharge={(e) => setAddress(e.target.value)}>
                </input>
                </li>
            
                <li>
                    <button type="submit" className="button-primary">Continue</button>
                </li>
            </ul>
        </form>
    </div>

}
export default ShippingScreen;