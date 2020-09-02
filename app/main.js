import ApiPokesController from "./Controllers/ApiPokesController.js";
import MyPokesController from "./Controllers/MyPokesController.js";

class App {
  constructor() {
    this.apiPokesController = new ApiPokesController();
    this.myPokesController = new MyPokesController();
  }
}

window["app"] = new App();
