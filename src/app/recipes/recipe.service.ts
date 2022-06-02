import { EventEmitter, Injectable } from '@angular/core';

import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from "./recipe.model";

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Fruit Smoothy',
            'A delicious smoothy',
            'https://images.unsplash.com/photo-1514995428455-447d4443fa7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80',
            [
                new Ingredient('Strawberry', 10),
                new Ingredient('Banana', 2),
                new Ingredient('Pineapple', 1),
                new Ingredient('Orange', 1),
                new Ingredient('Vanilla Extract', 1)
            ]),
        new Recipe(
            'Deluxe Salad',
            'A refreshing salad with all the best toppings',
            'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80',
            [
                new Ingredient('Head of lettuce', 1),
                new Ingredient('Grilled chicken', 2),
                new Ingredient('Boiled eggs', 2),
                new Ingredient('Tomatoes', 1),
                new Ingredient('Red cabbage', 1),
                new Ingredient('Cucumbers', 1)
            ])
    ];

    constructor(private slService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice()
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addIngredientsToList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
