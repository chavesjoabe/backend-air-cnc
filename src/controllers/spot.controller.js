import Spot from "../models/Spot.js";
import User from "../models/User.js";

class SpotController {
  async findByTech(req, res) {
    const { tech } = req.query;

    const spots = await Spot.find({ techs: tech });
    return res.json(spots);
  }

  async createSpot(req, res) {
    const { filename } = req.file;
    const { company, price, techs } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);

    if (!user) return res.status(400).json({ message: "user does not exists" });

    try {
      const spot = await Spot.create({
        user: user_id,
        company,
        price,
        techs: techs.split(",").map((tech) => tech.trim()),
        thumbnail: filename,
      });

      return res.json(spot);
    } catch (error) {
      return res.status(500).json({ errorMessage: error.message });
    }
  }
}

export default new SpotController();
