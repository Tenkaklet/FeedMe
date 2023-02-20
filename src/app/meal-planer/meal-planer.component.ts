import { Component, OnInit } from '@angular/core';
import { EdamamService } from '../edamam.service';

@Component({
  selector: 'app-meal-planer',
  templateUrl: './meal-planer.component.html',
  styleUrls: ['./meal-planer.component.scss']
})
export class MealPlanerComponent implements OnInit {
  mealSelection = '';
  
  constructor(private edamam: EdamamService) {
  }

  ngOnInit(): void {
    
  }

  onSelect(type: any) {
    this.mealSelection = type.target.value;
    // this.getDataForMeal(this.mealSelection);
  }

  getDataForMeal(selection: string) {
    console.info('the selection ', selection);
    this.edamam.getRecipesByMeal(selection)
    .subscribe(u => {
      console.log('the edamam api data is ', u);
    });
  }
}
