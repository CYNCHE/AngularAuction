import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from '../shared/product.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products: Product[];

  // search keyword
  public keyword: string;

  public titleFilter: FormControl = new FormControl();

  constructor(private productService: ProductService) {
    this.titleFilter.valueChanges
      .pipe(debounceTime(500))
      .subscribe(
        value => this.keyword = value
      )
  }

  ngOnInit() {
    //console.log(this.products[0].id);
    this.products = this.productService.getProducts();

  }

}



