import mongoose from "mongoose";

const {Schema} = mongoose;

const adminLoginSchema = new Schema ({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

})

export const adminLogin = mongoose.model("adminLogin", adminLoginSchema)