import Booking from "../models/Booking.js";

class BookingController {
  async create(req, res) {
    const { user_id } = req.headers;
    const { spot_id } = req.params;
    const { date } = req.body;

    const booking = await Booking.create({
      user: user_id,
      spot: spot_id,
      date,
    });

    await booking.populate("user");
    await booking.populate("spot");

    return res.json(booking);
  }
}

export default new BookingController();
