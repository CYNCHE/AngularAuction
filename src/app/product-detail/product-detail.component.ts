import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product/product.model';
import { ProductService } from '../shared/product.service';
import { Comment } from '../product/comment.model';
import { faEdit } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  newRating: number = 5;
  newComment: string = "";

  faEdit = faEdit;

  public isCommentShown: boolean = false;

  comments: Comment[];
  constructor(private route: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit() {
    let productId: number = this.route.snapshot.params["productId"];
    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getComments(productId);
  }

  addComment() {
    console.log(this.newRating);
    let comment = new Comment(1, this.product.id, new Date().toDateString(), "Vanessa", this.newRating, this.newComment);
    this.comments.unshift(comment);

    // update product rate after each comment submission
    let sum =  this.comments.reduce((sum, comment) => sum + comment.rating, 0);
    this.product.rate = sum / this.comments.length;

    // reset to default
    this.newRating = 5;
    this.newComment = "";
    this.isCommentShown = false;
  }

}
