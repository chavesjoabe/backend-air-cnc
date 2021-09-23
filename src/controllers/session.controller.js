import User from "../models/User.js";

class SessionController {
  async createSession(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (!user) return res.status(404).json({ message: "User not found" });

    return res.json(user);
  }
}

export default new SessionController();
