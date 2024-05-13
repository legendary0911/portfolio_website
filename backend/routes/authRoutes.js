import express from 'express';
import { signup, login, googlesignup, googlesignin } from '../controller/authController.js';
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/googlesignup', googlesignup);
router.post('/googlesignin', googlesignin);
export default router;
