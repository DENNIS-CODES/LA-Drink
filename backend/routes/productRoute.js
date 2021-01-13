import express from 'express';
import Product from '../models/productModel';

const router = express.Router();

router.get("/", async (req, res) =>{
    const products = await Product.find({});
    res.send(products);
});

router.post("/", async(req, res) =>{
    const product = new Product({
        name: req.body.name,
        name: req.body.name,
        name: req.body.name,
        name: req.body.name,
        name: req.body.name,
        name: req.body.name,
        name: req.body.name,
        name: req.body.name,
        name: req.body.name, 
    })
})
export default router;