import mongoose from 'mongoose';

const { Schema } = mongoose;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    category: {
      type: Array,
      required: true,
    },
  },
  // eslint-disable-next-line comma-dangle
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model('Blog', blogSchema);
