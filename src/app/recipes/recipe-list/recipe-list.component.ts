import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Toast', 'Like bread, but hot', 'https://upload.wikimedia.org/wikipedia/commons/3/37/Toast-2.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
