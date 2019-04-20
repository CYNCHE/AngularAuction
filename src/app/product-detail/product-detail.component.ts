import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productName: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.productName = this.route.snapshot.params["productName"];
  }

}