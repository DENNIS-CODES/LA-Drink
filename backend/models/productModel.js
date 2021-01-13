import  mongoose  from 'mongoose';

const productSchema = new mongoose.Schema({
    name:{ type: String, required: true},
    image:{ type: String, required: true},
    brand:{ type: String, required: true},
    price:{ type: Number, default:0, required: true},
    category:{ type: Number, default:0, required: true},
    countInStock:{ type: Number, default: 0, required: true},
    numReviews:{ type: Number, default: 0, required: true},
    
    
});

const productModel = mongoose.model("product", productSchema);

export default productModel;