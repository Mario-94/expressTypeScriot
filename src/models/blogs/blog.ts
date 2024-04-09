import mongoose from "mongoose";
import { blog } from "../../interface/blog.interface";
const BlogSchema = new mongoose.Schema<blog>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    usuario: { id: { type: mongoose.Types.ObjectId, required: true } },
  },
  {
    timestamps:
      true /*TODO: crea  la fecha de creacion y de actualizacion createdAt,updateAt*/,
    versionKey: false,
  }
);
const BlogModel = mongoose.model("blogs", BlogSchema);
export default BlogModel;
