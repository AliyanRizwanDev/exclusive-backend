import { signUp } from "../Models/userAuthenticationSchema.js";

export const postSignUp = async (req, res) => {
  const kitty = new signUp({
    name: req.body.name,
    email_phone: req.body.email_phone,
    password: req.body.password,
  });

  try {
    await kitty.save();

    res.status(200).json({
      message: `you have successfully signed up`,
      loginDetails: {
        name: req.body.name,
        password: req.body.password,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "error signing up",
      error: error.message,
    });
  }
};
