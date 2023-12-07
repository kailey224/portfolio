import mongoose from 'mongoose';

const connect = async () => {
  try {
    await mongoose.connect(String(process.env.MONGO));
    mongoose.set('strictQuery', false);
  } catch (error) {
    throw new Error('connect error');
  }
};

export default connect;
