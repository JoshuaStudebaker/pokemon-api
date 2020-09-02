export default class Poke {
  constructor({ name, id }) {
    this.name = name;
    this.id = id;
  }

  get Template() {
    return /*html*/ `
        <div class="card p-2 value">
            ${this.name} ${this.id}.toString 
        </div>
        `;
  }
}
