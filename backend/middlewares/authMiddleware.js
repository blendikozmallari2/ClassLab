const jwt = require('jsonwebtoken');
const mongoose = require('express-async-handler');
const taskSchema = mongoose.Schema('../models/userModel')

const protect = asyncHandler(async(req, res, next)=>{
    let token;

    if(req.headers.authorization && req.headers.authorization,startsWith('Bearer')) {
        try {
            token= req.headers.authorization.split('')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req,user = await UserActivation.findById(decoded.id).select('0password');
            next(); 
        } catch (error) {
            console.log(error);
            res.status(401);
            throw new Error('You are not authorized');
        }
    }
});

module.exports = {protect}