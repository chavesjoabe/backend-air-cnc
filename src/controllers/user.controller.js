import User from "../models/User.js";
import Validator from "../validator/Validator.js";

class UserController {
  async create(req, res) {
    const userValidation = Validator.validateUserSchema(req.body);

    if (userValidation.error) {
      const errorMessage = userValidation.error.message.replace(/\"/g, "");
      return res.status(400).json({ validationError: errorMessage });
    }

    const { name, email, password } = req.body;

    try {
      const user = await User.create({
        name,
        email,
        password,
      });

      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ errorMessage: error.message });
    }
  }
}

export default new UserController();
