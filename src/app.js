import express from "express";
import bodyParser from "body-parser";
import { HomeRouter } from "./routes/home.route";
import { GoodsRoute } from "./routes/goods.route";
import { ViewEngine } from "./configs/viewEngine";
import { ConnectDB } from "./configs/connectDB";
import {CorsConfig} from './configs/corsConfig';
require("dotenv").config();
export class App {
  app = express();
  port = process.env.PORT || 8080;
  viewEngine = new ViewEngine();
  corsConfig = new CorsConfig();
  constructor() {
    this.viewEngine.configViewEngine(this.app);
    this.corsConfig.init(this.app);
    console.log(">>>checking...");
    this.init();
    this.setUp();
    this.setUpRouter();
    this.getDatabase();
    this.run();
  }
  init = () => {};
  setUpRouter = () => {
    this.app.use("/", new HomeRouter().route);
    this.app.use("/",new GoodsRoute().route);
  };
  setUp = () => {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
  };
  run = () => {
    this.app.listen(this.port, () => {
      console.log("listening on http://localhost:" + this.port);
    });
  };
  getDatabase = () =>{
    new ConnectDB().getConnection();
  }
}
