import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userAction';

function ProductsScreen(props) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const productSave = useSelector(state => state.productSave);
    const { loading: loadingSave, success: successSave, error: errorSave } = productSave;
    const dispatch = useDispatch();

    useEffect(() => {

        return () => {
            //
        };
    }, [userInfo]);
    const submitHandler = (e) =>{
       e.preventDefault();
       dispatch(saveProduct({name, price})); 
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
                <input type="email" name="email" id="email" onCharge={(e) => setEmail(e.target.value)}>
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
export default ProductsScreen;