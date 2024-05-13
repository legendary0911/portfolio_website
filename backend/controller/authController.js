import User from "../model/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { getAuth } from "firebase-admin/auth"

export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user_find = await User.findOne({ email });
        if (user_find) {
            return res.status(400).json({ error: 'Email already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashedPassword });
        res.status(201).json({ message: 'User created successfully. Login to continue.', user });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const token = jwt.sign({ userId: user._id, admin: user.admin }, process.env.JWT_SECRET_KEY);
        res.cookie('token', token, { httpOnly: true });
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const googlesignup = async (req, res) => {
    try {
        let { access_token } = req.body;
        const decodedUser = await getAuth().verifyIdToken(access_token);
        let { email, name } = decodedUser;
        let user = await User.findOne({ email }).select("name  google_auth");
        if (!user) { //user doesnt exists
            user = await User.create({ name, email, google_auth: true });
            const token = jwt.sign({ userId: user._id, admin: user.admin }, process.env.JWT_SECRET_KEY);

            res.cookie('token', token, { httpOnly: true });
            return res.status(201).json({ message: 'User created successfully. Login to continue', user, token });
        } else { //user exits
            if (!user.google_auth) { // password signin
                return res.status(403).json({ "error": "This email was signed up without Google. Please login with password to continue." });
            } else { // google signin
                return res.status(403).json({ "error": "Account already exits. Please login to continue." });
            }
        }
    } catch (err) {
        return res.status(500).json({ "error": err.message });
    }

};


export const googlesignin = async (req, res) => {

    try {
        let { access_token } = req.body;
        const decodedUser = await getAuth().verifyIdToken(access_token);
        let { email, name } = decodedUser;
        let user = await User.findOne({ email }).select("name  google_auth");
        if (!user) { //user doesnt exists
            return res.status(404).json({ error: 'Account doesnt exists. Signup to continue' });
        } else { //user exits
            if (!user.google_auth) { // password signin
                return res.status(403).json({ "error": "This email was signed up without Google. Please login with password to continue." });
            } else { // google signin
                const token = jwt.sign({ userId: user._id, admin: user.admin }, process.env.JWT_SECRET_KEY);
                res.cookie('token', token, { httpOnly: true });
                return res.status(200).json({ "message": "Login Successful", token });
            }
        }
    } catch (err) {
        return res.status(500).json({ "error": err.message });
    }
};
