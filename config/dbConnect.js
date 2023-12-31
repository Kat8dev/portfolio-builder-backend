import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('connected to database');
  } catch (err) {
    console.log('mongo conection errorr',err);
  }
};

export default connectDB;
