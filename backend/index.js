import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import cors from 'cors';
import cookieParser from "cookie-parser";
import admin from "firebase-admin"
import authRoutes from './routes/authRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import serviceAccountKey from "./firebase_admin_sdk.json" with { type: "json" };
import aws from "aws-sdk";
import { nanoid } from 'nanoid';

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

//setting s3 bucket
const s3 = new aws.S3({
  region: 'ap-southeast-2',
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  signatureVersion: 'v4',

});

const generateUploadURL = async () => {
  const date = new Date();
  const imageName = `${nanoid()}-${date.getTime()}.jpeg`;

  return await s3.getSignedUrlPromise('putObject', {
    Bucket: 'portfolio-website-1919',
    Key: imageName,
    Expires: 60,
    ContentType: "image/jpeg",
  })
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

// Routes
app.get('/api/get-upload-url', (req, res) => {
  generateUploadURL().then(url => res.status(200).json({ uploadURL: url }))
    .catch(err => {
      console.log(err.message);
      return res.status(500).json({ error: err.message });
    })
})

app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);

app.listen(PORT, () => {
  connect();
  console.log(`Server running on port ${PORT}`);
});
