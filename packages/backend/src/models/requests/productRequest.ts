export class ProductRequest {
  private _name: string;
  private _price: number;
  private _description?: string;

  constructor(name: string, price: number, description?: string) {
    this._name = name;
    this._price = price;
    this._description = description;
  }

  set name(name: string) {
    if (name === "") {
      throw new Error("Name is required!");
    }
    this._name = name;
  }

  set price(value: number) {
    if (Number.isNaN(value)) {
      throw new Error("Price must be a number!");
    }
    this._price = value;
  }

  get description() {
    return this._description;
  }
}
