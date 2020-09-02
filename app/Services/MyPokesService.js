import { ProxyState } from "../AppState.js";
import Poke from "../Models/Poke.js";
import { sandboxApi } from "../Services/AxiosService.js";

class MyPokesService {
  async addPoke() {
    console.log("first");
    debugger;
    let rez = await sandboxApi.post("", ProxyState.activePokes);
    console.log("second");
    console.log(rez);
    ProxyState.myPokes = [...ProxyState.myPokes, new Poke(rez.data.data)];
    console.log(ProxyState.myPokes);
  }
}

export const myPokesService = new MyPokesService();
