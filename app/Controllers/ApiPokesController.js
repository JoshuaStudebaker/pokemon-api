import { ProxyState } from "../AppState.js";
import { apiPokesService } from "../Services/ApiPokesService.js";

//Private
function _draw() {
  let apiPokes = ProxyState.apiPokes;

  let template = "";
  apiPokes.forEach(
    (p) =>
      (template += `<li onclick="app.apiPokesController.getInfo('${p.name}')">${p.name}</li>`)
  );
  document.getElementById("api").innerHTML = template;
}

//Public
export default class ApiPokesController {
  constructor() {
    ProxyState.on("apiPokes", _draw);
    _draw();
    this.getApi();
  }

  getApi() {
    try {
      apiPokesService.getApi();
    } catch (error) {}
  }

  getInfo(name) {
    try {
      apiPokesService.getInfo(name);
    } catch (error) {}
  }
}
