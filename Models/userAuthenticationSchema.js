import mongoose from "mongoose";

const {Schema} = mongoose;



const signUpSchema = new Schema ({

   name: {
    type: String,
    required: true
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
        requried: true,
        minlength: 6
    }

})

export const signUp = mongoose.model("signUp", signUpSchema)
