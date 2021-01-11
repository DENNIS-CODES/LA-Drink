import express from 'express';
import data from './data';
import dotenv from "dotenv";
import config from './config';

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
Mongoose.connect(mongodbUrl, {
    useNewUrlParser: true
}).catch(error => console.log(error.reason));

const app =express();

app.get("/api/products/:id", (req, res) => {
    const productId = req.params.id;
    const product = data.products.find(x=>x._id === productId);
    if(product)
    res.send(product);
    else
    res.status(404).send({ msg: "Product Not Found." })
});

app.listen(config.PORT, () => { 
    console.log("server started at http://localhost:5000") 
});