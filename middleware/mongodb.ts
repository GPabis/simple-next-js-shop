import mongoose from 'mongoose';


const connectDB = async () => {
  const url = process.env.MONGODB_URL ? process.env.MONGODB_URL : '';
  await mongoose.connect(url, {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true,
  });
}


export default connectDB;