import express from "express";
import Routes from "./Routes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

class App {
  constructor() {
    this.server = express();
    this.port = process.env.PORT || 3000;
    this.middlewares();
    this.createDatabaseConnection();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(Routes);
  }
  createServer() {
    this.server.listen(this.port, () => {
      console.log("server is running on port:", this.port);
    });
  }
  createDatabaseConnection() {
    mongoose.connect(process.env.DATABASE_URL);
    const db = mongoose.connection;
    db.on("open", () => console.log("database connected"));
    db.on("error", () => console.log("error on database connection"));
  }
}
export default new App();
