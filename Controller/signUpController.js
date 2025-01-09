import { user } from "../Models/userAuthentication.js";

export const postUser = async (req, res) => {
  const { name, email_phone, password } = req.body;

  if (!name || !email_phone || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const existingUser = await user.findOne({ email_phone });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Email or phone number already exists." });
    }

    const newUser = new user({ name, email_phone, password });
    await newUser.save();
    console.log(newUser)

    res.status(200).json({
      message: "You have successfully signed up.",
      loginDetails: {
        name,
        password,
      },
      id: newUser._id
    });
  } 
 
  catch (error) {
    res.status(500).json({
      message: "Error signing up",
      error: error.message,
    });
  }
};


