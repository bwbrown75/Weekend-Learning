import { Component } from '@angular/core';
import { FruitService } from '../fruit.service';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css']
})
export class AppleComponent {

  constructor(private frService: FruitService)
  {
    
  }


  setFavorite(): void {
    console.log('apple');
    this.frService.setFavoriteFruit('apple');
  }
}
