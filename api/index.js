import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'
import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js'

dotenv.config();
const app = express();
app.use(cors());

mongoose.connect(`${process.env.MONGODB_URL}`).then(() => {
    console.log('Mongodb connected')
}).catch((err) => {
    console.log(err)
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(8000, () => {
    console.log('Server is running on port 8000')
})

// All Routes
app.use('/api/user',userRoute);
app.use('/api/auth',authRoute);


app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Interval server error';
    
    res.status(statusCode).json({success:false,statusCode,message})
})




