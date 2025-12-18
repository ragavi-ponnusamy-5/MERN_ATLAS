const mongoose=require("mongoose")
const productschema=mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String},
    price:{type:Number,required:true},
    image:{type:String}
    
});
module.exports=mongoose.model("Product",productschema);