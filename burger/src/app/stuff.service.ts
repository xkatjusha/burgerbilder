import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StuffService {
  burger: string[];
  price: number;
  constructor() { }
}
