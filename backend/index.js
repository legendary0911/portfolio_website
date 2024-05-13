import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import cors from 'cors';
import cookieParser from "cookie-parser";
import admin from "firebase-admin"
import authRoutes from './routes/authRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import serviceAccountKey from "./firebase_admin_sdk.json" with { type: "json" };

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey)
})

const corsOptions = {
  origin: true,
  credentials: true
}
const URL = process.env.MONGODB_URI;


// Connect to MongoDB
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    console.log('MongoDB database connected');
  } catch (err) {
    console.log('MongoDB database connection failed');
  }
}

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);

app.listen(PORT, () => {
  connect();
  console.log(`Server running on port ${PORT}`);
});
