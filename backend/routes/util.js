import jwt from 'jsonwebtoken';
import config from './config';
const getToken = (user) => {
    return jwt.sign(user, config.JWT_SECRET, {
        expiresIn: '48'
    })
}

const isAuth = (req, res, next) => {
    const token = req.headers.authorization;
    if(token){
        const onlyToken = token.slice(7, token.length);
        jwt.verify(onlyToken, config.JWT_SECRET, (err, decode) => {
        if (err) {
            return res.status(401).send({ msg: 'invalid Token' });
        }
            req.user = token;
            next();
            return
        });
    }
    return res.status(401).send({ msg: "Token is not supplied." })
}
const isAdmin = (req, res, next) => {
    if(req.user && req.user.isAdmin) {
        return next();
    }
    return res.status(401).send({ msg: 'Admin Token is not valid.' })
} 
export {
    getToken, isAuth, isAdmin 
}