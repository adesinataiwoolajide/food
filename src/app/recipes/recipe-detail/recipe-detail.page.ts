import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;
  constructor(
    private activatedRoute: ActivatedRoute,
    private reciepeService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recipeId')){
        //redirect the user
        this.router.navigate(['/recipes']);
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.reciepeService.getRecipe(recipeId);
    });
  }

  onDeleteRecipe(){
    this.alertCtrl.create({ 
      header: 'Are you sure you want to delete ?',
      message: 'Delete the Recipe ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel '
        },
        {
          text: 'Delete',
          handler: () => {
            this.reciepeService.deleteRecipe(this.loadedRecipe.id);
            this.router.navigate(['/recipes']);
          },
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
    
  }

}
