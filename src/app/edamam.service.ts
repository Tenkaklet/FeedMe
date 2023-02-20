import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EdamamService {
  API_URL = 'https://api.edamam.com/api/recipes/v2?type=public';
  app_id = '7842901e';
  app_key = '69cceb9058e1e683b8731828e422e9ae';
  edamamURL = `${this.API_URL}&app_id=${this.app_id}&app_key=${this.app_key}`;




  constructor(private http: HttpClient) { }

  getRecipesByMeal(meal: string) {
    return this.http.get(`${this.edamamURL}&mealType=${meal}`);
  }
}
