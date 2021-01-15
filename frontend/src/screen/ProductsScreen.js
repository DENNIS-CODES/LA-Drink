import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userAction';

function ProductsScreen(props) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');
    const [numReview, setNumReview] = useState('');
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
                <label for="price">
                    Price
                </label>
                <input type="text" name="name" id="name" onCharge={(e) => setNPrice(e.target.value)}>
                </input>
                </li>
                <li>
                <label for="image">
                    Image
                </label>
                <input type="text" name="name" id="name" onCharge={(e) => setName(e.target.value)}>
                </input>
                </li>
                <li>
                <label for="brand">
                    Brand
                </label>
                <input type="text" name="name" id="name" onCharge={(e) => setName(e.target.value)}>
                </input>
                </li>
                <li>
                <label for="name">
                    Category
                </label>
                <input type="text" name="name" id="name" onCharge={(e) => setName(e.target.value)}>
                </input>
                </li>
                <li>
                <label for="name">
                    Rating
                </label>
                <input type="text" name="name" id="name" onCharge={(e) => setName(e.target.value)}>
                </input>
                </li>
                <li>
                <label for="name">
                    Num Reviews
                </label>
                <input type="text" name="name" id="name" onCharge={(e) => setName(e.target.value)}>
                </input>
                </li>
                <li>
                <label for="name">
                    Description
                </label>
                <textarea name="description" id="name" onCharge={(e) => setDescription(e.target.value)}>
                </textarea>
                </li>
                <li>
                    <button type="submit" className="button-primary">Create</button>
                </li>
            </ul>
        </form>
    </div>

}
export default ProductsScreen;