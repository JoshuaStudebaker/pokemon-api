import ApiPokesController from "./Controllers/ApiPokesController.js";

class App {
  constructor() {
    this.apiPokesController = new ApiPokesController();
  }
}

window["app"] = new App();
