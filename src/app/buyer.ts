import{ Product } from './product';

export class Buyer {

id: string;
firstName: string;
lastName: string;
products: Product [];

constructor (id: string, firstName: string, lastName: string, products) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.products = products;

}

}