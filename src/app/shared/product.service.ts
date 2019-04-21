import { Injectable } from '@angular/core';
import { Product } from '../product/product.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    new Product(1, 'AsusRog', 'https://www.notebookcheck.net/fileadmin/Notebooks/Asus/GL704GM-DH74/gl704gm.jpg', 2300, 'Boog game laptop', 4, ['laptop', 'gaming']),
    new Product(1, 'Asus Rog', 'https://www.notebookcheck.net/fileadmin/Notebooks/Asus/GL704GM-DH74/gl704gm.jpg', 2300, 'Boog game laptop', 4, ['laptop', 'gaming']),
    new Product(1, 'Asus Rog', 'https://www.notebookcheck.net/fileadmin/Notebooks/Asus/GL704GM-DH74/gl704gm.jpg', 2300, 'Boog game laptop', 4.2, ['laptop', 'gaming']),
    new Product(1, 'Asus Rog', 'https://www.notebookcheck.net/fileadmin/Notebooks/Asus/GL704GM-DH74/gl704gm.jpg', 2300, 'Boog game laptop', 3.7, ['laptop', 'gaming']),
    new Product(1, 'Asus Rog', 'https://www.notebookcheck.net/fileadmin/Notebooks/Asus/GL704GM-DH74/gl704gm.jpg', 2300, 'Boog game laptop', 4, ['laptop', 'gaming']),
    new Product(1, 'Asus Rog', 'https://www.notebookcheck.net/fileadmin/Notebooks/Asus/GL704GM-DH74/gl704gm.jpg', 2300, 'Boog game laptop', 4, ['laptop', 'gaming']),
    new Product(1, 'Asus Rog', 'https://www.notebookcheck.net/fileadmin/Notebooks/Asus/GL704GM-DH74/gl704gm.jpg', 2300, 'Boog game laptop', 4, ['laptop', 'gaming']),
    new Product(1, 'Asus Rog', 'https://www.notebookcheck.net/fileadmin/Notebooks/Asus/GL704GM-DH74/gl704gm.jpg', 2300, 'Boog game laptop', 4, ['laptop', 'gaming']),

 ];
  constructor() { }

  getProducts() {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }


}
