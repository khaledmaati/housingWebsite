import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  //this searches for food items in the get all method for the food page Component and returns Food
  getFoodById(id: Number): Food{
    return this.getAll().find(food => food.id == id)!;
  }

  getFoodByName(name: string): Food[]{

    return this.getAll().filter(food => food.name.toLowerCase().includes(name.toLowerCase()));

  }

  //this method returns all info of food items for the cards in Home Component
  getAll(): Food[]{
    return[
      {
        id:1,
        name: 'Burger',
        price:10,
        imageUrl:'assets/Burger.jpg',
        description:"Indulge in the classic American delight with our signature burger. A juicy, chargrilled beef patty nestled between freshly toasted buns, topped with crisp lettuce, ripe tomatoes, sliced onions, and gooey melted cheese. Each bite is enhanced by our special house sauce, adding a tangy twist that complements the savory flavors. Perfect for a satisfying meal any time of the day, our burger promises a mouthwatering experience that will leave you craving for more.",
      },

      {
        id:2,
        name: 'Crème Brûlée',
        price:7,
        imageUrl:'assets/Crème Brûlée.jpg',
        description:"Experience the epitome of dessert elegance with our Crème Brûlée. This rich and creamy custard base is delicately flavored with vanilla, offering a smooth and velvety texture that melts in your mouth. The highlight is the contrasting caramelized sugar topping, perfectly torched to create a glossy, brittle crust that cracks exquisitely under the light tap of your spoon. Each spoonful offers a harmonious blend of warm, burnt sugar and cool, luxurious custard, making our Crème Brûlée a timeless classic that iss sure to enchant your taste buds..",
      },

      {
        id:3,
        name: 'French Toast',
        price:9.5,
        imageUrl:'assets/French Toast.jpg',
        description:"Savor the morning with our decadent French Toast, a breakfast classic reimagined with gourmet flair. Thick slices of brioche bread are soaked in a rich mixture of eggs, cream, and a hint of cinnamon, then pan-fried to golden perfection. Each piece is beautifully caramelized on the outside while remaining soft and custardy inside. Served with a drizzle of warm maple syrup, a dusting of powdered sugar, and a side of fresh berries, our French Toast is the perfect balance of sweet and savory, making it an irresistible start to your day..",
      },
      
      {
        id:4,
        name: 'Meat Balls',
        price:15,
        imageUrl:'assets/Meat Balls.jpg',
        description:"Dive into the comforting flavors of our homemade Meatballs, a hearty and savory delight. Expertly crafted from a blend of ground beef and pork, each meatball is seasoned with garlic, Italian herbs, and grated Parmesan, ensuring a rich and aromatic taste in every bite. Slowly simmered in a robust tomato sauce until tender, these meatballs are not only juicy but also infused with the savory essence of the sauce. Perfect as a main dish over spaghetti or as a tantalizing appetizer, our Meatballs promise a satisfying and flavorful journey with each forkful.",
      },
      
      {
        id:5,
        name: 'Onion Rings',
        price:6,
        imageUrl:'assets/Onion Rings.jpg',
        description:"Indulge in the ultimate snack with our crispy Onion Rings, a perfect fusion of sweetness and crunch. Each ring is made from thick slices of sweet onions, coated in a light, seasoned batter that fries up to a perfect golden brown. The exterior is satisfyingly crunchy, providing a delightful contrast to the tender, sweet onion within. Served with a side of our tangy dipping sauce, these Onion Rings are an irresistible treat that's perfect for sharing or enjoying all to yourself. Whether as a side dish or a standalone snack, they're sure to be a hit at any table.",
      },
      
      {
        id:6,
        name: 'Pizza',
        price:16,
        imageUrl:'assets/Pizza.jpg',
        description:"Feast on our artisanal Pizza, a masterpiece of authentic Italian flavors and fresh, high-quality ingredients. Our hand-tossed dough serves as the perfect canvas, light and airy with a crisp edge, baked to perfection in a blazing hot oven. The base is spread with a rich, flavorful tomato sauce made from vine-ripened tomatoes, seasoned with a blend of Italian herbs. Topped generously with a medley of the finest mozzarella and your choice of fresh toppings—from savory pepperoni, succulent mushrooms, crisp bell peppers, to sweet onions—each pizza is a celebration of flavors and textures. Baked until the cheese is bubbling and golden, our Pizza promises a slice of gourmet delight in every bite, bringing the essence of Italy right to your table.",
      },
      
      {
        id:7,
        name: 'Prawn Paella',
        price:20,
        imageUrl:'assets/Prawn Paella.jpg',
        description:"Embark on a culinary journey to the coast of Spain with our Prawn Paella, a vibrant and flavorful dish that captures the essence of Mediterranean cuisine. This traditional recipe begins with a base of saffron-infused short-grain rice, cooked slowly in a rich broth to absorb every ounce of flavor. Generous portions of succulent prawns are nestled into the rice, their sweet, delicate taste complementing the bold spices. Bell peppers, peas, and tomatoes are scattered throughout, adding pops of color and freshness to the dish. Aromatic herbs like parsley and a squeeze of fresh lemon juice are the final touches, enhancing the paella with a bright, zesty finish. Perfect for a festive gathering or a special dinner, our Prawn Paella is a delightful feast for the senses, promising a memorable dining experience with every spoonful.",
      },
      
      {
        id:8,
        name: 'Salmon',
        price:25,
        imageUrl:'assets/Salmon.jpg',
        description:"Delight in the elegant simplicity of our Salmon dish, where the natural beauty and flavor of the fish are the stars. We start with a premium cut of salmon, known for its rich, buttery texture and delicate taste. Each fillet is expertly seasoned and then seared, grilled, or baked to perfection, ensuring a crispy exterior while preserving the moist, tender interior. Accompanied by a light, complementary sauce such as dill lemon butter or a subtle miso glaze, the salmon's flavors are elevated without being overwhelmed. Served alongside a medley of seasonal vegetables or a fluffy bed of herbed quinoa, our Salmon dish offers a healthy, sophisticated, and utterly satisfying dining experience, perfect for those who appreciate the finer nuances of seafood cuisine.",
      },
      
      {
        id:9,
        name: 'Sub Sandwich',
        price:13,
        imageUrl:'assets/Sub Sandwich.jpg',
        description:"Dive into the layers of flavor with our Sub Sandwich, a hearty and customizable feast packed into a freshly baked, crusty roll. The foundation of this culinary delight is the bread, chosen for its perfect balance of crunchy exterior and soft, airy interior. Inside, the sandwich is generously filled with a variety of premium cold cuts such as salami, ham, and turkey, layered with slices of provolone or Swiss cheese for a melty richness. Fresh lettuce, ripe tomatoes, thinly sliced onions, and crisp pickles add a refreshing crunch, while a drizzle of olive oil, vinegar, and a sprinkle of oregano bring a zesty Mediterranean flair. Each bite of our Sub Sandwich is a symphony of textures and tastes, making it an ideal choice for a satisfying lunch or a casual dinner on the go.",
      },
      
      {
        id:10,
        name: 'Tartar',
        price:12,
        imageUrl:'assets/Tartar.jpg',
        description:"Indulge in the refined simplicity of our Tartar, a dish that celebrates the natural flavors and textures of its ingredients. Expertly prepared using only the freshest, high-quality raw beef or fish, finely chopped and seasoned to perfection with a delicate balance of spices, capers, and a hint of Dijon mustard. This luxurious dish is often accented with a touch of finely chopped shallots and a sprinkle of fresh herbs, enhancing the clean, pure taste of the meat or fish. Served with a side of crisp toast points or a soft, elegant quail egg on top, our Tartar is a sophisticated choice that offers a uniquely rich and savory dining experience, perfect for those with a taste for the exquisite.",
      },
      
    ]
  }
}
