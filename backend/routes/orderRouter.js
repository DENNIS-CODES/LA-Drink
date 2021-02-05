import express from 'express';

const oderRouter = express.Router();

orderRouter.post(
    '/',
     expressAsyncHandler(async (re, res) => {
         if (req.body.orderItems.length === 0) {
             res.status(400).send({ message: 'cart is empty'});
         }
     }))