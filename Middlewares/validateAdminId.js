
import { adminLogin } from "../Models/adminAuthentication.js";

export const validateAdminId = async (req, res, next) => {

    const {adminId} = req.body

  try {

    const admin = await adminLogin.findById(adminId);
    if (!admin) {
      return res.status(403).json({ message: "Unauthorized: Admin not found." });
    }
    next();
  } catch (error) {
    res.status(500).json({
      message: "Error validating admin ID.",
      error: error.message,
    });
  }
};
