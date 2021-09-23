import Spot from "../models/Spot.js";

class DashboardController {
  async findAll(req, res) {
    const { user_id } = req.headers;

    const spots = await Spot.find({ user: user_id });

    return res.json(spots);
  }
}

export default new DashboardController();
