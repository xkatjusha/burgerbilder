import { Component } from '@angular/core';
import { StuffService } from '../stuff.service';

@Component({
  selector: 'app-putburgertogether',
  templateUrl: './putburgertogether.component.html',
  styleUrls: ['./putburgertogether.component.css']
})
export class PutburgertogetherComponent {

  constructor(public stuff: StuffService) { }
}
