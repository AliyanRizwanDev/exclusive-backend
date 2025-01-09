import { category } from "../Models/Categories.js";

export const postCategory = async(req, res) => {
    const {name} = req.body

    try {
        const newCategory = new category({name})
        await newCategory.save()

        res.status(201).json({
            message: "Category created successfully"
        })
    }

    catch (error) {
        res.status(500).json({
            message: "error creating category",
            error: error.message
        })
    }

   
}