import { ProxyState } from "../AppState.js";
import { myPokesService } from "../Services/MyPokesService.js";

function _drawActive() {
  let activePokes = ProxyState.activePokes;
  if (activePokes) {
    document.getElementById("active").innerHTML = activePokes.Template;
  } else document.getElementById("active").innerHTML = "";
}
//Private
function _draw() {
  let myPokes = ProxyState.myPokes;
  let template = "";
  // myPokes.forEach((p) => (template += v.Template));
  // document.getElementById("app").innerHTML = /*html*/ `
  // <button className="btn btn-info" onclick="app.myPokesController.addValue()">Add Value</button>
  // <div className="card-columns myPokes">
  //     ${template}
  // </div>
  // `;
}

//Public
export default class MyPokesController {
  constructor() {
    ProxyState.on("myPokes", _draw);
    ProxyState.on("activePokes", _drawActive);
    _draw();
  }

  addPoke() {
    console.log("works");
    try {
      myPokesService.addPoke();
    } catch (error) {}
  }
}
