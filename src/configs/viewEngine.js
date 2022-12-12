export class ViewEngine {
  constructor(){}
  configViewEngine = (app) => {
    app.set("view engine", "ejs");
    app.set("views", "./src/views");
  };
}
