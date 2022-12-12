import { Router } from "express";
import { HomeController } from "../controller/home.controller";
export class HomeRouter {
  path = "/";
  route = Router();
  homeController = new HomeController();
  constructor() {
    this.init();
  }
  init() {
    this.route.get(`${this.path}`, this.homeController.getHome);
  }
}
