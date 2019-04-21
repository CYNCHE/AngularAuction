import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    //console.log(this.products[0].id);
    this.products = this.productService.getProducts();

  }

}



