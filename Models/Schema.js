import mongoose from "mongoose";

const {Schema} = mongoose;

const loginSchema = new Schema ({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 20,
        trim: true
    }
    ,
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match:  [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
    },
    password: {
        type: String,
        requried: true,
        minlength: 6
    }

})

export const login = mongoose.model("login", loginSchema)