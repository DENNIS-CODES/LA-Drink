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
    
    
    return <div className="content content-margined">
        <div className="product-header">
            <h3>Products</h3>
            <button onClick={() => openModal({})}>Create Product</button>
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
                                <button onClick={() => openModal(product)}>Edit</button>
                                <button>Delete</button>
                            </th>
                    </tr>))}
                </tbody>
            </tabel>
        
    
  
</div>
    </div>
}
export default ProductsScreen;