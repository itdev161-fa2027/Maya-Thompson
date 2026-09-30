// middleware/auth.js
import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
    //Get token from header
    const token = req.header('x-auth-token');

    //check if no token
    if(!token){
        return res.status(401).json({msg: 'No token, authorization denied'});
    }

    try {
        //Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        //Add user from payload to request object
        req.user = decoded.user;
        // tells the program to move on from the middleware
        next();
    }
    catch(error)
    {
        res.status(401).json({msg: 'Token is not valid'});
    }
    
};

export default auth;