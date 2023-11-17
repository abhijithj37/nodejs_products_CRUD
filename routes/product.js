const express=require('express')
const productController= require('../Controllers/productController')
const router=express.Router()


    router.route('/')
    .get(productController.getAllProducts)
    .post(productController.createProduct)

    router.route('/:id')
    .get(productController.getProduct)
    .delete(productController.deleteProduct)
    .patch(productController.updateProduct)

    module.exports=router