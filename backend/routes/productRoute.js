import express from 'express';
import Product from '../models/productModel';

const router = express.Router();

router.get("/", async (req, res) =>{
    const products = await Product.find({});
    res.send(products);
});

router.post("/:id", async(req, res) =>{
    const productId = req.params.id;
    const product = await product.findOne({_id: productId});
    if(product) {
        product.name = req.body.name;
        product.price = req.body.price;
        product.image = req.body.image;
        product.brand = req.body.brand;
        product.category = req.body.category;
        product.countInStock = req.body.countInStock;
        product.description = req.body.description;
    const updatedProduct = await product.save();
    if (updatedProduct) {
      return res
        .status(200)
        .send({ message: 'Product Updated', data: updatedProduct });
    }
  }
  return res.status(500).send({ message: ' Error in Updating Product.' });
});

export default router;