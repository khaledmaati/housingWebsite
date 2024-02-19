import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { GitInfoService } from '../services/git-info.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  //injecting food dervice into home componant as a dependency
  foods: Food[];
 

  //injecting GitInfoService
  gitInfo: any;


  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService, 
    private gitInfoService: GitInfoService,
  ) {}



  //Populated foods property using the gett all method in the food service
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      if(params['searchTerm'])
      this.foods = this.foodService.getFoodByName(params['searchTerm'])
      
      else
        this.foods = this.foodService.getAll();

    });

    //Use the service to fetch the Git commit information and store it in a variable.
    this.gitInfoService.getCommitInfo().subscribe(info => {
      this.gitInfo = info;
    });


  }

}
