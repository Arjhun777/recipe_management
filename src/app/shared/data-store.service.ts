import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import { Http } from "@angular/http";

@Injectable()
export class DataStoreService {
    constructor(private http: Http, private recipeService: RecipeService) { }

    storeRecipers() {
        return this.http.put('https://my-first-app-ad4e8.firebaseio.com/recipes.json', this.recipeService.getRecipes())
    }
}