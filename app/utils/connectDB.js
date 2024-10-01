import mongoose from "mongoose"

export default async function connectDB(){
    try{
        await mongoose.connect(process.env.database_url)
        console.log("Yay!~ Connected to DB")
    } catch(error){
        console.log("Failed to connect to database")
    }
}