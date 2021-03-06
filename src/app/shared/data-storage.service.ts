import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    constructor(private http: HttpClient,
                private recipeService: RecipeService) {}

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://wdd430-tutorial-project-default-rtdb.firebaseio.com/recipes.json', recipes)
            .subscribe(response => {
                console.log(response);
            })
    }

    fetchRecipes() {
        return this.http.get<Recipe[]>('https://wdd430-tutorial-project-default-rtdb.firebaseio.com/recipes.json')
            .pipe(
                map(recipes => {
                    let correctRecipes = recipes.map(recipe => {
                        if (!recipe.ingredients)
                            recipe.ingredients = [];
                        return recipe;
                    })
                    console.log(correctRecipes);
                    return correctRecipes
                }),
                tap(recipes => {
                    this.recipeService.setRecipes(recipes);
                })
            )
    }
}
