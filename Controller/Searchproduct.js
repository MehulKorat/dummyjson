var all_products = require('../Model/Allproductmodel');
var search = require('../Model/Searchmodel')

exports.search_products = async (req, res) => {

    // var searchData = {
    //     title: req.body.title.toLowerCase()
    // };

    // var data = await all_products.find(searchData);

    // res.status(200).json({
    //     status: "success",
    //     product:data

    // });


   
        let data = await all_products.find(
            {
                "$or":[
                    {name:{$regex:req.params.key}},
                    {brand:{$regex:req.params.key}}
                ]
            }
        )
        res.send(data);
    
    
}