import { Component } from '@angular/core';
import { FruitService } from '../fruit.service';

@Component({
  selector: 'app-banana',
  templateUrl: './banana.component.html',
  styleUrls: ['./banana.component.css']
})
export class BananaComponent {

  constructor(private frService: FruitService)
  {
    
  }


  setFavorite(): void {
    console.log('banana');
    this.frService.setFavoriteFruit('banana');
  }

}
