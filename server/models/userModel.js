import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    }
);

// module.exports = mongoose.model('User', userSchema);
export const User = mongoose.model("User", userSchema)
