import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Food One', 
      imageUrl: 'assets/icon/food1.jpg',
      ingredients: ['Fresh Fries', 'Port Meat', 'Salad']
    },

    {
      id: 'r2',
      title: 'Food 2', 
      imageUrl: 'assets/icon/food2.jpg',
      ingredients: ['Fresh Fries', 'Port Meat', 'Salad']
    },

    {
      id: 'r3',
      title: 'Food 3', 
      imageUrl: 'assets/icon/food3.jpg',
      ingredients: ['Meat', 'Port Water', 'Food']
    },
    {
      id: 'r4',
      title: 'Food 4', 
      imageUrl: 'assets/icon/food4.jpg',
      ingredients: ['Fresh Fries', 'Port Meat', 'Salad']
    },

    {
      id: 'r5',
      title: 'Food 4', 
      imageUrl: 'assets/icon/food5.jpg',
      ingredients: ['Fresh Fries', 'Port Meat', 'Salad']
    },

    {
      id: 'r6',
      title: 'Food 6', 
      imageUrl: 'assets/icon/food6.jpg',
      ingredients: ['Meat', 'Port Water', 'Food']
    },

    {
      id: 'r7',
      title: 'Food Seven', 
      imageUrl: 'assets/icon/food7.jpg',
      ingredients: ['Fresh Fries', 'Port Meat', 'Salad']
    },

    {
      id: 'r8',
      title: 'Food Eight', 
      imageUrl: 'assets/icon/food8.jpg',
      ingredients: ['Fresh Fries', 'Port Meat', 'Salad']
    },

    {
      id: 'r9',
      title: 'Food Nine', 
      imageUrl: 'assets/icon/food9.jpg',
      ingredients: ['Meat', 'Port Water', 'Food']
    },
    {
      id: 'r10',
      title: 'Food 10', 
      imageUrl: 'assets/icon/food10.jpg',
      ingredients: ['Meat', 'Port Water', 'Food']
    }
  ];
  constructor() {
  }

  getAllRecipes(){
     return [...this.recipes]; 
  }

  getRecipe(recipeId: string){
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId; 
      }),
    };
  }

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe =>{
      return recipe.id !== recipeId;
    })
  }


}
