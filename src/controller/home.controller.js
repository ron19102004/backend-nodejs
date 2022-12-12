import { HomeService } from "../services/home.service";
export class HomeController {
  homeService = new HomeService();
  constructor() {}
  getHome = async (req, res) => {
    let result = await this.homeService.getHome();
    res.status(200).json(result);
  };
}
