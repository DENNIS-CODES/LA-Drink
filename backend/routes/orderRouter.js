import express from 'express';

const oderRouter = express.Router();

orderRouter.post(
    '/',
     expressAsyncHandler(async (re, res) => {
         if (req.body.orderItems.length === 0) {
             res.status(400).send({ message: 'cart is empty'});
         } else {
             const Oder = new Oder({
                 orderItems: req.body.oderItems,
                 shippingAddress: req.body.shippingAddress,
                 paymentMethod: req.body.paymentMethod,
                 itemsPrice: req.body.itemsPrice,
                 shippingPrice: req.body.shippingPrice,
                 texPrice: req.body.texPrice,
                 totalPrice: req.body.totalPrice, 
             })
         }
     }))