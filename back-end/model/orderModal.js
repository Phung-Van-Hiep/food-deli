import mogoose from "mongoose"

const orderSchema = new mogoose.Schema({
    userId:{type:String, required: true},
    items:{type:Array,required:true},
    amount:{type:Number, required:true},
    address:{type:Object,required:true},
    status:{type:String,default:"Food Processing"},
    date:{type:Date,default:Date.now()},
    payment:{type:Boolean,default:false}
})

const orderModel = mogoose.models.order || mogoose.model("order",orderSchema)

export default orderModel