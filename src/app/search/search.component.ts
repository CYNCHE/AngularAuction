import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  formModel: FormGroup;

  categories: string[];

  constructor(private productService: ProductService) {
    // build form data model using reactive approach
    let fb = new FormBuilder();
    this.formModel = fb.group({
      name: ['', [Validators.minLength(3), Validators.required]],
      price: [null, [this.positiveNumberValidator, Validators.required]],
      categories: ['-1']
    })
  }

  ngOnInit() {
    this.categories = this.productService.getAllCategories();
    console.log(this.categories);
  }

  positiveNumberValidator(control: FormControl): any {
    if (!control.value) {
      return null;
    }

    let price = parseInt(control.value);

    if (price > 0) {
      return null;
    } else {
      return {negativeNumber: true};
    }
  }

  onSearch() {
    if (this.formModel.valid) console.log(this.formModel);
  }



}
