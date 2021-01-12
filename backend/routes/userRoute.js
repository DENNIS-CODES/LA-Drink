import express from 'express';
import User from '../models/userModel';
const router = express.Router();

router.post('/signin', async (req, res) =>{

    const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });
    if(signinuser){
        res.send({
            _id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            token: getToken{user}
        })

    } else {
        req.statusCode(401).send({msg:'nvalid Email or Password.'});
    }


});

router.get("/createadmin", async (req, res) =>{
    try {
         const user = new User({
        name: 'Deno',
        email: 'dennistrevor41@gmail.com',
        password: '1234',
        isAdmin: true
    });
    const newUser = await user.save();
    res.send(newUser);
    } catch (error) {
        res.send({ msg: error.message });
    }
});

export default router;