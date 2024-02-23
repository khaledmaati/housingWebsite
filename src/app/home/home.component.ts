import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { GitInfoService } from '../services/git-info.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],

  providers: [GitInfoService], // Ensure GitInfoService is provided here if it's not a standalone service

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  //injecting food dervice into home componant as a dependency
  foods: Food[];
 

  //injecting GitInfoService
  gitInfo: any = {};


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

    //Use the service to fetch the Git commit information and store it in a variable gitInfo.
    this.gitInfoService.getCommitInfo().subscribe(info => {
      this.gitInfo = info;
    });


  }

}
