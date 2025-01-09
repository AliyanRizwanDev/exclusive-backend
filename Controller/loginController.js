import { user } from "../Models/userAuthentication.js";

export const postLogin = async (req, res) => {
  try {
    const findUser = await user.findOne({
      email_phone: req.body.email_phone,
      password: req.body.password,
    });

    if (!findUser) {
      res.status(404).json({
        message: "invaild login credentials",
      });
    }

    res.status(200).json({
      message: `You have successfully logged in, Welcome ${findUser.name}`,
      id: findUser._id
    });
  } catch (error) {
    res.status(500).json({
      message: "Error logging in",
      error: error.message,
    });
  }
};
