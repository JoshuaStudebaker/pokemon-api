export default class Pokemon {
  constructor({ id, name, height, weight }) {
    this.id = id;
    this.name = name;
    this.height = height;
    this.weight = weight;
  }

  get Template() {
    return /*html*/ `
        <div class="card p-2 value">
            ${this.name} - ${this.height} - ${this.weight}
        </div>
        `;
  }
}
