var jwt = require('jsonwebtoken');

exports.checkToken =(req,res,next)=>{
    jwt.verify(req.headers.authorization,'cdmi');
    next();
}
