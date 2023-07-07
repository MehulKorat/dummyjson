var express = require('express');
var router = express.Router();


const {user_register,user_login}=require('../Controller/Logincontroller')
const {get_all_products} =require('../Controller/Allproductcontroller')
const{search_products}=require('../Controller/Searchproduct')
// const singleProduct=require('../Controller/Singleproductcontroller')
const{limitproducts}=require('../Controller/limitskipcontroller')

/* GET home page. */

router.get('/register',user_register);
router.get('/',user_login);
router.get('/product',get_all_products);
// router.get('/product/:id',singleProduct)
router.get('/search/:key',search_products);
router.get('/product/:page_no',limitproducts);


module.exports = router;
