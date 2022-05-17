import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('nameInput') nameInputRef: ElementRef;
    @ViewChild('amountInput') amountInputRef: ElementRef;

    constructor(private slService: ShoppingListService) { }
    ngOnInit(): void { }

    onAddItem() {
        const ingredient = {
            name: this.nameInputRef.nativeElement.value,
            amount: this.amountInputRef.nativeElement.value
        }
        const newIngredient = new Ingredient(ingredient.name, ingredient.amount);
        this.slService.addIngredient(newIngredient);
    }
}
