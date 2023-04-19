export default class ProductDTO {
  constructor(data, currencies) {
    this.nombre = data.nombre;
    this.description = data.description;
    this.precio = data.precio;

    for (const [currency, value] of Object.entries(currencies)) {
      this[currency] = value;
    }
  }
}
