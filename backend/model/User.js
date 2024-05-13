import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    google_auth: { type: Boolean, default: false },
    admin: { type: Boolean, default: false },

});

export default mongoose.model('User', userSchema);
