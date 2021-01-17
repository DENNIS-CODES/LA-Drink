import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveProduct } from '../actions/productActions';

function ProductsScreen(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const [id, setid] = useState('');
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
    const { loading, products, error } = productList;

    const { loading: loadingSave, success: successSave, error: errorSave } = productSave;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
        return () => {
            //
        };
    }, []);

    const openModal = (product) =>{
        setModalVisible(true);
        setName(product._id);
        setName(product.name);
        setName(product.price);
        setName(product.image);
        setName(product.brand);
        setName(product.category);
        setName(product.countInStock);
        setName(product.name);
        setName(product.name);
    }
    const submitHandler = (e) =>{
       e.preventDefault();
       dispatch(saveProduct({ name, price, image, brand, category, countInStock, description, rating, numReview })); 
    }
    
    
    return (
        <div className="content content-margined">
          <div className="product-header">
            <h3>Products</h3>
            <button className="button primary" onClick={() => openModal({})}>
              Create Product
            </button>
          </div>
          {modalVisible && (
            <div className="form">
              <form onSubmit={submitHandler}>
                <ul className="form-container">
                  <li>
                    <h2>Create Product</h2>
                  </li>
                  <li>
                    {loadingSave && <div>Loading...</div>}
                    {errorSave && <div>{errorSave}</div>}
                  </li>
    
                  <li>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      id="name"
                      onChange={(e) => setName(e.target.value)}
                    ></input>
                  </li>
                  <li>
                    <label htmlFor="price">Price</label>
                    <input
                      type="text"
                      name="price"
                      value={price}
                      id="price"
                      onChange={(e) => setPrice(e.target.value)}
                    ></input>
                  </li>
                  <li>
                    <label htmlFor="image">Image</label>
                    <input
                      type="text"
                      name="image"
                      value={image}
                      id="image"
                      onChange={(e) => setImage(e.target.value)}
                    ></input>
                    <input type="file" onChange={uploadFileHandler}></input>
                    {uploading && <div>Uploading...</div>}
                  </li>
                  <li>
                    <label htmlFor="brand">Brand</label>
                    <input
                      type="text"
                      name="brand"
                      value={brand}
                      id="brand"
                      onChange={(e) => setBrand(e.target.value)}
                    ></input>
                  </li>
                  <li>
                    <label htmlFor="countInStock">CountInStock</label>
                    <input
                      type="text"
                      name="countInStock"
                      value={countInStock}
                      id="countInStock"
                      onChange={(e) => setCountInStock(e.target.value)}
                    ></input>
                  </li>
                  <li>
                    <label htmlFor="name">Category</label>
                    <input
                      type="text"
                      name="category"
                      value={category}
                      id="category"
                      onChange={(e) => setCategory(e.target.value)}
                    ></input>
                  </li>
                  <li>
                    <label htmlFor="description">Description</label>
                    <textarea
                      name="description"
                      value={description}
                      id="description"
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </li>
                  <li>
                    <button type="submit" className="button primary">
                      {id ? 'Update' : 'Create'}
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => setModalVisible(false)}
                      className="button secondary"
                    >
                      Back
                    </button>
                  </li>
                </ul>
              </form>
            </div>
          )}
export default ProductsScreen;