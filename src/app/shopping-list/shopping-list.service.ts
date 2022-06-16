import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    constructor() { }

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(id: number) {
        return this.ingredients[id];
    }

    addIngredient(ingredient: Ingredient) {
        let ingredientIndex = this.ingredients.findIndex(ingredientEl => {
            return ingredientEl.name.toLowerCase() === ingredient.name.toLowerCase();
        })
        if (ingredientIndex >= 0) {
            this.ingredients[ingredientIndex].amount =
                parseFloat(this.ingredients[ingredientIndex].amount.toString()) +
                parseFloat(ingredient.amount.toString());
        }
        else
            this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        for (const ingredient of ingredients) {
            let ingredientIndex = this.ingredients.findIndex(ingredientEl => {
                return ingredientEl.name.toLowerCase() === ingredient.name.toLowerCase();
            })
            if (ingredientIndex >= 0) {
                this.ingredients[ingredientIndex].amount =
                    parseFloat(this.ingredients[ingredientIndex].amount.toString()) +
                    parseFloat(ingredient.amount.toString());
            }
            else
                this.ingredients.push(ingredient);
        }
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}