import mongoose from 'mongoose';

// Set a default in case env variable is undefined
const { DATABASE_URI = '' } = process.env;

const connectDB = async () => {
  try {
    // Gets rid of warning of some mongoose deprecation.
    mongoose.set('strictQuery', false);

    mongoose.connect(DATABASE_URI);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
