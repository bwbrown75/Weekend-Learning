import { Component } from '@angular/core';
import { FruitService } from '../fruit.service';

@Component({
  selector: 'app-coconut',
  templateUrl: './coconut.component.html',
  styleUrls: ['./coconut.component.css']
})
export class CoconutComponent {

  constructor(private frService: FruitService)
  {
    
  }


  setFavorite(): void {
    this.frService.setFavoriteFruit('coconut');
  }

}
