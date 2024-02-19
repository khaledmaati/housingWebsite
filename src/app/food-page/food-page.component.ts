import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router'; // Import RouterModule if needed elsewhere
import { Food } from '../shared/models/Food';
import { FoodService } from '../services/food/food.service';// Ensure you have a FoodService with a getFoodById method

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [RouterModule], // Add other necessary imports here
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'] // Corrected property name and made it an array
})
export class FoodPageComponent implements OnInit {

  //injecting food service into food page componant as a dependency
  //Why do we inject it differtly from homeComp?
  //What is activatedRoute?

  food: Food;
  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService // Corrected the service injection with proper naming
    
  ) {
    this.activatedRoute.params.subscribe((params) => {
      if(params['id']) {
        this.food = this.foodService.getFoodById(params['id']); // Make sure getFoodById is implemented in FoodService
      }
    });
  }

  ngOnInit(): void {
    // Initialization logic if needed
  }
}
