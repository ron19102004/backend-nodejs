import { GoodsController } from "../controller/goods.controller";
import { Router } from "express";
export class GoodsRoute {
  path = "/goods";
  route = Router();
  goodsController = new GoodsController();
  constructor() {
    this.init();
  }
  init() {
    this.route.get(`${this.path}`, this.goodsController.getGoods);
    this.route.get(`${this.path}/:id`, this.goodsController.getGoodsByID);
    this.route.put(`${this.path}/update/:id`, this.goodsController.update);
    this.route.delete(`${this.path}/delete/:id`, this.goodsController.delete);
    this.route.post(`${this.path}/create`, this.goodsController.create);
  }
}
