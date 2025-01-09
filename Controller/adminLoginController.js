import { adminLogin } from "../Models/adminAuthentication.js";


export const postAdminLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if admin exists with the provided credentials
    const admin = await adminLogin.findOne({ username, password })
    if (!admin) {
      return res.status(404).json({
        message: "Invalid login credentials",
      }); // Return to prevent further execution
    }



    // Respond with success message if credentials are valid
    res.status(200).json({
      message: `You have successfully logged in, Welcome ${admin.username}`,
      id: admin._id
    });
  } catch (error) {
    // Handle server errors
    res.status(500).json({
      message: "Error logging in",
      error: error.message,
    });
  }
  return response1
};

