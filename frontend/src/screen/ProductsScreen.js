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
                    <h2>Create Product</h2>
                </li>
                <li>
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                <label for="name">
                    Name
                </label>
                <input type="text" name="name" id="name" onCharge={(e) => setName(e.target.value)}>
                </input>
                </li>

                <li>
                    <button type="submit" className="button-primary">Create</button>
                </li>
            </ul>
        </form>
    </div>

}
export default ProductsScreen;