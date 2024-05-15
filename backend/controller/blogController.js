import Blog from '../model/Blog.js';
import { nanoid } from 'nanoid';

export const createBlog = async (req, res) => {
  try {
    const { title, banner, content, des, author, draft } = req.body;
    if (!title.length) {
      return res.status(403).json({ error: "You must provide a title" });
    }

    if (!draft) {
      if (!des.length || des.length > 200) {
        return res.status(403).json({ error: "You must provide blog description under 200 characters" });
      }
      if (!banner.length) {
        return res.status(403).json({ error: "You must provide blog banner to publish it" });
      }
      if (!content.blocks.length) {
        return res.status(403).json({ error: "You must provide blog content to publish it" });
      }
    }


    let blog_id = title.replace(/[^a-zA-z0-9]/g, ' ').replace(/\s+/g, "-").trim() + "-" + nanoid();
    const blog = new Blog({
      title, des, banner, content, author, draft, blog_id
    })

    const newblog = await blog.save();
    res.status(200).json({ message: "blog created successfully", newblog })
  } catch (err) {
    res.status(500).json({ error: err });
  }
};




export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate('author', 'username');
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id).populate('author', 'username');
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const updatedBlog = await Blog.findByIdAndUpdate(id, { title, content }, { new: true });
    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json({ message: 'Blog updated successfully', blog: updatedBlog });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json({ message: 'Blog deleted successfully', blog: deletedBlog });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
