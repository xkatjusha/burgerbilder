import { Component } from '@angular/core';
import { StuffService } from '../stuff.service';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent {
  burger: string[];
  salad: string = "assets/images/salad.png";
  bacon: string = "assets/images/bacon.png";
  cheese: string = "assets/images/cheese.png";
  meat: string = "assets/images/meat.png";

  constructor(public stuff: StuffService) {
    this.burger = [];
    this.stuff.burger = this.burger;
    this.stuff.price = 2;
  }

  moreSalad() {
    this.stuff.burger.push(this.salad);
    this.stuff.price = this.stuff.price + 0.50;
  }

  lessSalad() {
    if (this.stuff.burger.indexOf(this.salad) == -1) {
      alert("There is no salad on the burger.");
    }
    else {
      var position = this.stuff.burger.lastIndexOf(this.salad);
      this.stuff.burger.splice(position, 1);
      if (this.stuff.price - 0.50 >= 2) {
        this.stuff.price = this.stuff.price - 0.50;
      }
    }
  }

  moreBacon() {
    this.stuff.burger.push(this.bacon);
    this.stuff.price = this.stuff.price + 1.50;
  }

  lessBacon() {
    if (this.stuff.burger.indexOf(this.bacon) == -1) {
      alert("There is no bacon on the burger.");
    }
    else {
      var position = this.stuff.burger.lastIndexOf(this.bacon);
      this.stuff.burger.splice(position, 1);
      if (this.stuff.price - 1.50 >= 2) {
        this.stuff.price = this.stuff.price - 1.50;
      }
    }
  }

  moreCheese() {
    this.stuff.burger.push(this.cheese);
    this.stuff.price = this.stuff.price + 0.75;
  }

  lessCheese() {
    if (this.stuff.burger.indexOf(this.cheese) == -1) {
      alert("There is no cheese on the burger.");
    }
    else {
      var position = this.stuff.burger.lastIndexOf(this.cheese);
      this.stuff.burger.splice(position, 1);
      if (this.stuff.price - 0.75 >= 2) {
        this.stuff.price = this.stuff.price - 0.75;
      }
    }
  }

  moreMeat() {
    this.stuff.burger.push(this.meat)
    this.stuff.price = this.stuff.price + 2.50;
  }

  lessMeat() {
    if (this.stuff.burger.indexOf(this.meat) == -1) {
      alert("There is no meat on the burger.");
    }
    else {
      var position = this.stuff.burger.lastIndexOf(this.meat);
      this.stuff.burger.splice(position, 1);
      if (this.stuff.price - 2.50 >= 2) {
        this.stuff.price = this.stuff.price - 2.50;
      }
    }
  }
}
