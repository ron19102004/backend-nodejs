import { Sequelize } from "sequelize"
export class ConnectDB{
    getConnection = async () =>{ 
        let sequelize = new Sequelize('test-api-nodejs', 'root', "", {
            host: 'localhost',
            dialect: "mysql",
            logging: false
          });
          try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }
}