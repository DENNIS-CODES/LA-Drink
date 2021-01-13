import  mongoose  from 'mongoose';

const productSchema = new mongoose.Schema({
    name:{ type: String, required: true},
    image:{ type: String, required: true},
    brand:{ type: String, required: true},
    category:{ type: String, required: true},
    countInStock:{ type: String, required: true},
    numReviews:{ type: String, required: true},
    
    
});

const productModel = mongoose.model("product", productSchema);

export default productModel;