import { Component, OnInit } from '@angular/core';
import { EdamamService } from '../edamam.service';

@Component({
  selector: 'app-meal-planer',
  templateUrl: './meal-planer.component.html',
  styleUrls: ['./meal-planer.component.scss']
})
export class MealPlanerComponent implements OnInit {
  mealSelection = '';
  mealResults: any;
  
  constructor(private edamam: EdamamService) {
  }

  ngOnInit(): void {
    
  }

  onSelect(type: any) {
    this.mealSelection = type.target.value;
    //this.getDataForMeal(this.mealSelection); // ! This makes an API Call to Edaman
  }

  getDataForMeal(selection: string) {
    this.edamam.getRecipesByMeal(selection)
    .subscribe(u => {
      this.mealResults = u;
    });
  }
}
