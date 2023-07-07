var all_products= require('../Model/Allproductmodel');


exports.limitproducts = async (req, res) => {

    var page_no = req.params.page_no;

    var start = (page_no-1)*3;

    var data = await all_products.find().limit(3).skip(start);

    res.status(200).json({
        status: "success",
        data,        
        start

    })

}