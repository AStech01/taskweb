const mongoose=require("mongoose")
const MONGO_URL = process.env.MONGO_URL;
const connectDB= async()=>{
     try {
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
             useUnifiedTopology: true
        })
        console.log('mongodb connected');
        
     } catch (err) {
        console.log(err.message);
        process.exit(1);
        
     }
}

module.exports = connectDB