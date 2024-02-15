import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  //added foods property
  foods: Food[] = [];
  constructor(private foodService: FoodService, private route:ActivatedRoute) {}

  //Populated foods property using the gett all method in the food service
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      if(params['searchTerm'])
      this.foods = this.foodService.getAll().filter(food => food.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
      
      else
        this.foods = this.foodService.getAll();

    })

  }

}
