import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Product[];

  constructor() { }

  ngOnInit() {
    //console.log(this.products[0].id);
    this.products = [
       new Product(1, 'Asus Rog', 'https://www.notebookcheck.net/fileadmin/Notebooks/Asus/GL704GM-DH74/gl704gm.jpg', 2300, 'Boog game laptop', 4, ['laptop', 'gaming']),
       new Product(1, 'Asus Rog', 'https://www.notebookcheck.net/fileadmin/Notebooks/Asus/GL704GM-DH74/gl704gm.jpg', 2300, 'Boog game laptop', 4, ['laptop', 'gaming']),
       new Product(1, 'Asus Rog', 'https://www.notebookcheck.net/fileadmin/Notebooks/Asus/GL704GM-DH74/gl704gm.jpg', 2300, 'Boog game laptop', 4, ['laptop', 'gaming']),
       new Product(1, 'Asus Rog', 'https://www.notebookcheck.net/fileadmin/Notebooks/Asus/GL704GM-DH74/gl704gm.jpg', 2300, 'Boog game laptop', 4, ['laptop', 'gaming']),
       new Product(1, 'Asus Rog', 'https://www.notebookcheck.net/fileadmin/Notebooks/Asus/GL704GM-DH74/gl704gm.jpg', 2300, 'Boog game laptop', 4, ['laptop', 'gaming']),
       new Product(1, 'Asus Rog', 'https://www.notebookcheck.net/fileadmin/Notebooks/Asus/GL704GM-DH74/gl704gm.jpg', 2300, 'Boog game laptop', 4, ['laptop', 'gaming']),
       new Product(1, 'Asus Rog', 'https://www.notebookcheck.net/fileadmin/Notebooks/Asus/GL704GM-DH74/gl704gm.jpg', 2300, 'Boog game laptop', 4, ['laptop', 'gaming']),
       new Product(1, 'Asus Rog', 'https://www.notebookcheck.net/fileadmin/Notebooks/Asus/GL704GM-DH74/gl704gm.jpg', 2300, 'Boog game laptop', 4, ['laptop', 'gaming']),

    ];
    console.log(this.products[0].id);
  }

}



