import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  formModel: FormGroup;

  constructor() {
    // build form data model using reactive approach
    let fb = new FormBuilder();
    this.formModel = fb.group({
      name: ['', Validators.minLength(3)],
      price: [null,],
      category: ['-1']
    })
  }

  ngOnInit() {
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

  }



}
