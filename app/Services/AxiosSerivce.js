export const pokemonApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon?limit=1050",
  timeout: 10000,
});

export const sandboxApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/joshuas/pokemon/",
  timeout: 10000,
});
