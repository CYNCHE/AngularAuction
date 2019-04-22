import { Component, OnInit, Input } from '@angular/core';
import { faStarHalfAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty }  from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input() rate: number;
  // by deafault review contains five empty stars
  public stars: number[] = [0, 0, 0, 0, 0];

  faStarHalf = faStarHalfAlt;
  faStar = faStar;
  faStarEmpty = faStarEmpty;


  constructor() { }

  ngOnInit() {
    // decide how many full stars and half star
    // use number to indicate the shape of star
    // full star code 1, half star code 2
    let fullStar = Math.floor(this.rate), halfStar = this.rate % 1;
    let i = 0;
    for (; i < fullStar; ++i) this.stars[i] = 1;
    if (halfStar > 0 && halfStar < 1) this.stars[i] = 2;
    for (; i < 5; ++i) this.stars[i] = 0;
  }

  onClickStar(index: number) {
    this.rate = index + 1;
    this.ngOnInit();
  }

}
