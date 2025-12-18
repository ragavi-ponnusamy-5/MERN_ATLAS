const express=require("express");
const { getProduct, postProduct, deleteProduct, updateProduct } = require("../controller/ProductController");
const router=express.Router();

router.get("/getproduct",getProduct)
router.post("/postproduct",postProduct)
router.delete("/deleteproduct/:id",deleteProduct)
router.put("/updateproduct/:id",updateProduct)
module.exports=router;
