import { GoodService } from "../services/goods.service";
export class GoodsController {
  goodService = new GoodService();
  constructor() {}
  create = async (req, res) => {
    this.goodService.create(req.body);
  }
  getGoods = async (req, res) => {
    let result = await this.goodService.readAll();
    res.status(200).json(result);
  };
  getGoodsByID = async (req, res) => {
    let result = await this.goodService.readById(req.params.id);
    res.status(200).json(result);
  };
  update = async (req, res) => {
    this.goodService.update(req.params.id, req.body);
  }
  delete = async (req, res) => {
    this.goodService.delete(req.params.id);
  }
}
