import express from 'express';

const router = express.Router();

router.get("/api/users/createadmin", async (req, res) =>{
    const user = new user({
        name: 'Deno',
        email: 'dennistrevor41@gmail.com',
        password: '1234',
        isAdmin: true
    });
})