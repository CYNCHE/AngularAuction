import { Component, OnInit, Input } from '@angular/core';
import { faStarHalf, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input() rate: number;
  public stars: boolean[] = [];

  faStarHalf = faStarHalf;
  faStar = faStar;

  constructor() { }

  ngOnInit() {
    // decide how many full stars
    let fullStar = Math.floor(this.rate), halfStar = this.rate % 1;
    for (let i = 0; i < fullStar; ++i) this.stars.push(true);
    if (halfStar > 0 && halfStar < 1) this.stars.push(false);
  }

}
