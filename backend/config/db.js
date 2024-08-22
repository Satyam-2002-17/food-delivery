import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://user:Satyam_123@cluster0.uyxdq3e.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}
