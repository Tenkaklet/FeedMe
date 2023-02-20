import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EdamamService {
  
  API_URL = environment.edamamConfig.api_url;
  app_id = environment.edamamConfig.app_id;
  app_key = environment.edamamConfig.app_key;
  edamamURL = `${this.API_URL}&app_id=${this.app_id}&app_key=${this.app_key}`;

  constructor(private http: HttpClient) { }

  getRecipesByMeal(meal: string) {
    return this.http.get(`${this.edamamURL}&mealType=${meal}`);
  }
}
