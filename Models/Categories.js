import mongoose from "mongoose";

const {Schema} = mongoose;

const categorySchema = new Schema ({
    name: {
        type: String,
        required: true
    }
})

export const category = mongoose.model("category", categorySchema)