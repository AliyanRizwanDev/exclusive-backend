

import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email_phone: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^(?:\d{11}|\w+@\w+\.\w{2,3})$/, 'Please use a valid email address or an 11-digit phone number.'],
  },
  password: {
    type: String,
    required: true, 
    minlength: 6,
  },
});

export const user = mongoose.model("user", userSchema);
