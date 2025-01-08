import { signUp } from "../Models/userAuthenticationSchema.js";

export const postLogin = async (req, res) => {
  try {
    const user = await signUp.findOne({
      email_phone: req.body.email_phone,
      password: req.body.password,
    });

    if (!user) {
      res.status(404).json({
        message: "invaild login credentials",
      });
    }

    res.status(200).json({
      message: `You have successfully logged in, Welcome ${user.name}`,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error logging in",
      error: error.message,
    });
  }
};
