import { ProxyState } from "../AppState.js";
import { apiPokemonsService } from "../Services/ApiPokemonsService.js";

//Private
function _draw() {
  let values = ProxyState.apiPokemons;
  let template = "";
  values.forEach(
    (v) =>
      (template += `<li onclick="app.apiSpellsController.getDetails('${v.id}')">${v.name}</li>`)
  );
  document.getElementById("api").innerHTML = template;
}

//Public
export default class ApiPokemonsController {
  constructor() {
    ProxyState.on("apiPokemons", _draw);
    _draw();
  }

  getApi() {
    try {
      apiPokemonsService.getApi();
    } catch (error) {}
  }
}
