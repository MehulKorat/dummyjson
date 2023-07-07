var allProduct = require('../Model/Allproductmodel');
var jwt = require('jsonwebtoken');

exports.get_all_products = async (req, res) => {

  var data = await allProduct.find({ "title": req.body.title,"brand":req.body.brand  })

    if (data.length == 0) {

      var all_products = await allProduct.create(req.body);

      var token = jwt.sign({ id: data.id }, 'cdmi');

      res.status(200).json({
        status: "success",
        all_products,
        token
      })

    }
    else {
      res.status(200).json({
        status: "All Product already Created,please Rename Brand or Titlq"
      })
    }
  }


  