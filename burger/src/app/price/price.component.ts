import { Component } from '@angular/core';
import { StuffService } from '../stuff.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent {
  price: number;
  constructor(public stuff: StuffService) {
    this.price = this.stuff.price;
  }
}
