import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://hiep:280402@hiepphung.zv3vkfl.mongodb.net/food_delivery').then(()=>console.log("DB Connected"))
}