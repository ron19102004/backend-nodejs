var cors = require('cors')
require('dotenv').config();
export class CorsConfig {
  constructor() {}
  init = (app) => {
    const corsOptions = {
      origin: `http://localhost:3000`,
      credentials: true, //access-control-allow-credentials:true
      optionSuccessStatus: 200,
    };
    app.use(cors(corsOptions));
  };
}
