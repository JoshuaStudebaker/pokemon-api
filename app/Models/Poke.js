export default class Poke {
  constructor({ name, id, height, weight }) {
    this.name = name;
    this.id = id;
    this.height = height;
    this.weight = weight;
  }

  get Template() {
    return /*html*/ `
        <div class="card p-2 value">
            <p>${this.name} - ${this.height} - ${this.weight}</p>
            <button type="button" onclick="app.myPokesController.addPoke()">Add</button>
        </div>
        `;
  }
}
