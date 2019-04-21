import { Injectable } from '@angular/core';
import { Product } from '../product/product.model';
import { Comment } from '../product/comment.model';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'AsusRog', 'https://www.notebookcheck.net/fileadmin/Notebooks/Asus/GL704GM-DH74/gl704gm.jpg', 2300, 'Boog game laptop', 4, ['laptop', 'gaming']),
    new Product(2, 'Asus Rog', 'https://www.notebookcheck.net/fileadmin/Notebooks/Asus/GL704GM-DH74/gl704gm.jpg', 2300, 'Boog game laptop', 4, ['laptop', 'gaming']),
    new Product(3, 'Asus Rog', 'https://www.notebookcheck.net/fileadmin/Notebooks/Asus/GL704GM-DH74/gl704gm.jpg', 2300, 'Boog game laptop', 4.2, ['laptop', 'gaming']),
    new Product(4, 'Asus Rog', 'https://www.notebookcheck.net/fileadmin/Notebooks/Asus/GL704GM-DH74/gl704gm.jpg', 2300, 'Boog game laptop', 3.7, ['laptop', 'gaming']),
    new Product(5, 'Asus Rog', 'https://www.notebookcheck.net/fileadmin/Notebooks/Asus/GL704GM-DH74/gl704gm.jpg', 2300, 'Boog game laptop', 4, ['laptop', 'gaming']),
    new Product(6, 'Asus Rog', 'https://www.notebookcheck.net/fileadmin/Notebooks/Asus/GL704GM-DH74/gl704gm.jpg', 2300, 'Boog game laptop', 4, ['laptop', 'gaming']),
    new Product(7, 'Asus Rog', 'https://www.notebookcheck.net/fileadmin/Notebooks/Asus/GL704GM-DH74/gl704gm.jpg', 2300, 'Boog game laptop', 4, ['laptop', 'gaming']),
    new Product(8, 'Asus Rog', 'https://www.notebookcheck.net/fileadmin/Notebooks/Asus/GL704GM-DH74/gl704gm.jpg', 2300, 'Boog game laptop', 4, ['laptop', 'gaming']),
 ];


 private comments: Comment[] = [
   new Comment(1, 1, '2019-03-02 10:03', 'Michael', 4.3, "Good quality!"),
   new Comment(2, 1, '2019-03-08 22:03', 'Jimmy', 4.1, "Nice!"),
   new Comment(3, 3, '2019-03-02 10:03', 'Michael', 4.3, "Good quality!"),
   new Comment(4, 1, '2019-03-02 10:03', 'Michael', 4.3, "Good quality!"),
   new Comment(5, 4, '2019-03-02 10:03', 'Michael', 4.3, "Good quality!"),
   new Comment(6, 6, '2019-03-02 10:03', 'Michael', 4.3, "Good quality!"),
 ]
  constructor() { }

  getProducts() {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }

  getComments(id: number): Comment[] {
    return this.comments.filter((comment) => comment.productId == id);
  }
}
