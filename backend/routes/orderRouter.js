import express from 'express';

const oderRouter = express.Router();

orderRouter.post(
    '/',
    isAuth,
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
                 user: req.user._id,
             });
             const createOrder = await order.save();
             res
             .status(201)
             .send({ message: 'new order Created', order: createOrder });
         }
     })
     );

     export default orderRouter