import { Injectable } from "@angular/core";
import { Ingredient } from "../models/ingredient";
import { Recipe } from "../models/recipe";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe('Recipe Name',
        'Recipe Description',
        'https://static01.nyt.com/images/2021/06/01/dining/11lightveg-roundup-promo/11lightveg-roundup-8-superJumbo-v2.jpg?quality=75&auto=webp',
        [
            new Ingredient('Paneer',2),
            new Ingredient('Sauce',1),
        ]),
        new Recipe('Another Recipe Name',
        'Another Recipe Description',
        'https://static01.nyt.com/images/2021/06/01/dining/11lightveg-roundup-promo/11lightveg-roundup-8-superJumbo-v2.jpg?quality=75&auto=webp',
        [
            new Ingredient('Green chilli',20),
            new Ingredient('Red Sauce',1),
        ])
    ];
    constructor(private shoppingListService: ShoppingListService){
    }
    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}