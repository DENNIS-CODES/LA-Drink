import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveProduct } from '../actions/productActions';

function ProductsScreen(props) {
    const [modalVisible, setModalVisible] = useState(false);
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
    const productList = useSelector(state => state.productList);
    const { loading, products, erroe } = productList;

    const { loading: loadingSave, success: successSave, error: errorSave } = productSave;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
        return () => {
            //
        };
    }, []);

    const openModal = (product) =>{
        setName(product.name);
        setName(product.name);
        setName(product.name);
        setName(product.name);
        setName(product.name);
        setName(product.name);
        setName(product.name);
        setName(product.name);
        setName(product.name);
    }
    const submitHandler = (e) =>{
       e.preventDefault();
       dispatch(saveProduct({ name, price, image, brand, category, countInStock, description, rating, numReview })); 
    }
    
    
    return <div className="content content-margined">
        <div className="product-header">
            <h3>Products</h3>
            <button>Create Product</button>
        </div>
        <div className="product-list">
            <tabel>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Brand</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (<tr>
                        <td>{product._id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.category}</td>
                        <td>{product.brand}</td>
                            <th>
                                <button>Edit</button>
                                <button>Delete</button>
                            </th>
                    </tr>))}
                </tbody>
            </tabel>
        
    
    <div classname="form">
        <form onSubmit={submitHandler} >
            <ul className="form-conatiner">
                <li>
                    <h2>Create Product</h2>
                </li>
                <li>
                    {loadingSave && <div>Loading...</div>}
                    {errorSave && <div>{errorSave}</div>}
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
                <input type="text" name="name" id="name" onCharge={(e) => setPrice(e.target.value)}>
                </input>
                </li>
                <li>
                <label for="image">
                    Image
                </label>
                <input type="text" name="name" id="name" onCharge={(e) => setImage(e.target.value)}>
                </input>
                </li>
                <li>
                <label for="brand">
                    Brand
                </label>
                <input type="text" name="name" id="name" onCharge={(e) => setBrand(e.target.value)}>
                </input>
                </li>
                <li>
                <label for="brand">
                    Count in Stock 
                </label>
                <input type="text" name="name" id="name" onCharge={(e) => setCountInStock(e.target.value)}>
                </input>
                </li>
                <li>
                <label for="name">
                    Category
                </label>
                <input type="text" name="name" id="name" onCharge={(e) => setCategory(e.target.value)}>
                </input>
                </li>
                <li>
                <label for="name">
                    Rating
                </label>
                <input type="text" name="name" id="name" onCharge={(e) => setRating(e.target.value)}>
                </input>
                </li>
                <li>
                <label for="name">
                    Num Reviews
                </label>
                <input type="text" name="name" id="name" onCharge={(e) => setNumReview(e.target.value)}>
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
</div>
    </div>
}
export default ProductsScreen;