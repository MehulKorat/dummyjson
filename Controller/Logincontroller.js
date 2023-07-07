var register = require('../Model/Registermodel');
var jwt = require('jsonwebtoken');

exports.user_register = async (req, res) => {

    var data = await register.find({ "email": req.body.email });

    if (data.length == 0) {

        var data = await register.create(req.body);

        res.status(200).json({
            status: "success",
            data
        })
    }
    else{

        res.status(200).json({
            status: "your email already register",
            
        })
    }
}

exports.user_login = async (req,res)=>{

    var data = await register.find({ "email": req.body.email });

    var token1=jwt.sign({id:data.id},'cdmi');

    var obj ={

        token:token1
    }

    await register.findByIdAndUpdate(data[0]._id,obj);

    if(data.length==1){
        res.status(200).json({
            status: "success",
            token1
        
            
        })
    }
    else if(data.length==0){
        res.status(200).json({
            status: "check your mail",
            
        })
    }
    else if(data.length !=0){
        res.status(200).json({
            status: "find multiple account",
            
        })
    }
}