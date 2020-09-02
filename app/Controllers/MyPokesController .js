import { ProxyState } from "../AppState.js";
// import { myPokesService } from "../Services/ApiPokesService.js";

//Private
function _draw() {
  let myPokes = ProxyState.myPokes;
  let template = "";
  myPokes.forEach((v) => (template += v.Template));
  document.getElementById("app").innerHTML = /*html*/ `
  <button className="btn btn-info" onclick="app.myPokesController.addValue()">Add Value</button>  
  <div className="card-columns myPokes">
      ${template}
  </div>
  `;
}

//Public
export default class MyPokesController {
  constructor() {
    ProxyState.on("myPokes", _draw);
    _draw();
  }
}
