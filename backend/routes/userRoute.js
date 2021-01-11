import express from 'express';

const router = express.Router();

router.get("/createadmin", async (req, res) =>{
    try {
         const user = new user({
        name: 'Deno',
        email: 'dennistrevor41@gmail.com',
        password: '1234',
        isAdmin: true
    });
    const newUser = await user.save();
    res.send(user);
    } catch (error) {
        res.send({ msg: error.message });
    }
});

export default router;