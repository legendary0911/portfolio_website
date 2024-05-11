import User from "../model/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user_find = await User.findOne({ email });
        if (user_find) {
            return res.status(404).json({ message: 'Email already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ email, password: hashedPassword, admin: false });
        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ userId: user._id, admin: user.admin }, process.env.JWT_SECRET_KEY);
        res.cookie('token', token, { httpOnly: true });
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
