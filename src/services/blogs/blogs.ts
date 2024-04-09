import { blog } from "../../interface/blog.interface";
import BlogModel from "../../models/blogs/blog";

/* es el encargado de la logca de negocio aqui es donde nosotros ya hacemos las acciones a realizar  */
const getBlogs = async () => {
  const responseGets = await BlogModel.find({});
  return responseGets;
};

const getBlog = async (id: string) => {
  const responseGet = await BlogModel.findById({ id });
  return responseGet;
};

const insertBlog = async (blog: blog) => {
  const responseInsert = await BlogModel.create(blog);
  return responseInsert;
};

const putBlog = async (id: string, blog: blog) => {
  const responseUpdtaBlog = await BlogModel.findByIdAndUpdate(id, blog);
  return responseUpdtaBlog;
};

const deleteBlog = async (id: string) => {
  const responseDelete = await BlogModel.findOneAndDelete({ id });
  return responseDelete;
};
export { insertBlog, getBlogs, getBlog, deleteBlog, putBlog };
