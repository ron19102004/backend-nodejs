import db from "../models";
export class GoodService {
  goodModel = db.Goods;
  readAll = async () => {
    return new Promise(async (resolve, reject) => {
      try {
        let goods = await this.goodModel.findAll();
        resolve(goods);
      } catch (error) {
        reject(error);
      }
    });
  };
  readById = async (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        let project = await this.goodModel.findOne({
          where: { id: `${id}` },
        });
        if (project === null) {
          console.log("Not found!");
        } else {
          console.log(project);
          resolve(project);
        }
      } catch (error) {
        reject(error);
      }
    });
  };
  update = async (id, data) => {
    new Promise(async (resolve, reject) => {
      try {
        const update = await this.goodModel.update(data, {
          where: {
            id,
          },
        });
        resolve(update);
        console.log("Update oke");
      } catch (err) {
        reject(err);
      }
    });
  };
  delete = async (id) => {
    new Promise(async (resolve, reject) => {
      try {
        const del = await this.goodModel.destroy({
          where: {
            id,
          },
        });
        resolve(del);
      } catch (err) {
        reject(err);
      }
    });
  };
  create = async (data) => {
    new Promise(async (resolve, reject) => {
      try {
        const good = await this.goodModel.create(data);
        resolve(good);
      } catch (err) {
        reject(err);
      }
    });
  };
}
