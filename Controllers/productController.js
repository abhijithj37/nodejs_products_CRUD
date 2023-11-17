const Product = require("../Models/productModel");
const Apifeatures = require("../Utils/ApiFeatures");
const CustomError = require("../Utils/customError");
const asyncErrorHandler = require("../Utils/errorHandler");

module.exports = {
  createProduct: asyncErrorHandler(async (req, res, next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        product,
      },
    });
  }),

  getProduct: asyncErrorHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
      const err = new CustomError("Product with this ID is not found!", 404);
      return next(err);
    }
    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  }),

  getAllProducts: asyncErrorHandler(async (req, res, next) => {
    const features = new Apifeatures(Product.find(), req.query)
      .filter()
      .paginate();

    let products = await features.query;
    if (!products.length) {
      const err = new CustomError(
        "No products found matching the specified criteria.",
        404
      );
      return next(err);
    }

    res.status(200).json({
      status: "success",
      length: products.length,
      data: {
        products,
      },
    });
  }),

  updateProduct:asyncErrorHandler(async(req,res,next)=>{

  const updatedProduct=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})

  if(!updatedProduct){
    const err=new CustomError('Product with this ID is not found',404)
    return next(err)
  }

  res.status(200).json({
    status:'success',
    data:{
        product:updatedProduct
    }
  })

  }),


  deleteProduct: asyncErrorHandler(async (req, res, next) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      const err = new CustomError("Product with this Id is not found", 404);
      return next(err);
    }
    res.status(204).json({
      status: "success",
      data: null,
    });
  }),


};
