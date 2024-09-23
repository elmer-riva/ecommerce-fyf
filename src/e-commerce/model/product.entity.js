export class Product {
    constructor(name, price, product_id, short_description) {
        this._name = name;
        this._price = price;
        this._product_id = product_id;
        this._short_description = short_description;
    }
    get name() {
        return this._name;
    }
    get price() {
        return this._price;
    }
    get product_id() {
        return this._product_id;
    }
    get short_description() {
        return this._short_description;
    }
}