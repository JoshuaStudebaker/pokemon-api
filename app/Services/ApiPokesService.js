import { ProxyState } from "../AppState.js";
import Poke from "../Models/Poke.js";
import { pokeApi } from "./AxiosService.js";

class ApiPokesService {
  async getApi() {
    let res = await pokeApi.get();
    console.log(res);
    ProxyState.apiPokes = res.data.results;
  }
  async getInfo(name) {
    let res = await pokeApi.get(name);
    ProxyState.activePokes = new Poke(res.data);
    console.log(ProxyState.activePokes);
  }
}

export const apiPokesService = new ApiPokesService();
