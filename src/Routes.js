import express from "express";
import SessionController from "./controllers/session.controller.js";
import UserController from "./controllers/user.controller.js";
import SpotController from "./controllers/spot.controller.js";
import multer from "multer";
import configs from "./config/uploads.js";
import BookingController from "./controllers/booking.controller.js";

class Routes {
  constructor() {
    this.routes = express.Router();
    this.loadRoutes();
  }

  loadRoutes() {
    const updload = multer(configs);
    this.routes.post("/users", UserController.create);
    this.routes.post("/sessions", SessionController.createSession);
    this.routes.post(
      "/spots",
      updload.single("thumbnail"),
      SpotController.createSpot
    );
    this.routes.get("/spots", SpotController.findByTech);
    this.routes.post("/spots/:spot_id/bookings", BookingController.create);
  }
}
export default new Routes().routes;
