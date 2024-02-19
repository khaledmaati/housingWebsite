import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodPageComponent } from './food-page/food-page.component';



export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home Page'},
    { path: 'search/:searchTerm', component: HomeComponent},
    { path: 'food/:id', component: FoodPageComponent},

];
