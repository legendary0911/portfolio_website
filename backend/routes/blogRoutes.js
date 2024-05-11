import express from 'express';
import { verifyAdmin, verifyUser } from '../util/jwtUtils.js';
import { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog } from '../controller/blogController.js';

const router = express.Router();

// Create a new blog
router.post('/', verifyAdmin, createBlog);

// Get all blogs
router.get('/', getAllBlogs);

// Get a blog by ID
router.get('/:id', getBlogById);

// Update a blog
router.put('/:id', verifyAdmin, updateBlog);

// Delete a blog
router.delete('/:id', verifyAdmin, deleteBlog);

export default router;
