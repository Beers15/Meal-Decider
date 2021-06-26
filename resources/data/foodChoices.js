const foodChoices = [{
    food:"Fruit Yogurt Parfait",
    type: "Breakfast",
    area:"NAmerica",
    hot: false,
    vegitarian: true
  },
  {
    food:"Cinnamon Rolls",
    type: "Breakfast",
    area:"NAmerica",
    hot: false,
    vegitarian: true
  },
  {
    food:"Steak, Eggs, and Hash Browns",
    type: "Breakfast",
    area:"NAmerica",
    hot: true,
    vegitarian: false
  },
  {
    food:"Breakfast Burrito",
    type: "Breakfast",
    area:"NAmerica",
    hot: true,
    vegitarian: false
  },
  {
    food:"Fruit Smoothie",
    type: "Breakfast",
    area:"NAmerica",
    hot: false,
    vegitarian: true
  },
  {
    food:"Sweet Crepes",
    type: "Breakfast",
    area:"NAmerica",
    hot: true,
    vegitarian: true
  },
  {
    food:"Huevos Rancheros",
    type: "Breakfast",
    area:"NAmerica",
    hot: true,
    vegitarian: true
  },
  {
    food:"Quiche",
    type: "Breakfast",
    area:"NAmerica",
    hot: false,
    vegitarian: false
  },
  {
    food:"Bacon Cheesburger",
    type: "Lunch",
    area:"NAmerica",
    hot: true,
    vegitarian: false
  },
  {
    food:"Reuben Sandwich",
    type: "Lunch",
    area:"NAmerica",
    hot: true,
    vegitarian: false
  },
  {
    food:"Apple Pie",
    type: "Lunch",
    area:"NAmerica",
    hot: true,
    vegitarian: true
  },
  {
    food:"Philly Cheesesteak",
    type: "Lunch",
    area:"NAmerica",
    hot: true,
    vegitarian: false
  },
  {
    food:"Grilled Begi Caprese with Pesto",
    type: "Lunch",
    area:"NAmerica",
    hot: false,
    vegitarian: true
  },
  {
    food:"A classic B. L. T.",
    type: "Lunch",
    area:"NAmerica",
    hot: false,
    vegitarian: false
  },
  {
    food:"Potato Salad and Baked Beans",
    type: "Lunch",
    area:"NAmerica",
    hot: false,
    vegitarian: true
  },
  {
    food:"Vegitarian Burrito Bowl",
    type: "Lunch",
    area:"NAmerica",
    hot: false,
    vegitarian: true
  },
  {
    food:"Beef Steak Fajitas",
    type: "Dinner",
    area:"NAmerica",
    hot: true,
    vegitarian: false
  },
  {
    food:"Chicken and Sausage Gumbo",
    type: "Dinner",
    area:"NAmerica",
    hot: true,
    vegitarian: false
  },
  {
    food:"Creamy Dandelion Soup",
    type: "Dinner",
    area:"NAmerica",
    hot: false,
    vegitarian: true
  },
  {
    food:"California Rolls",
    type: "Dinner",
    area:"NAmerica",
    hot: false,
    vegitarian: false
  },
  {
    food:"Mac N' Cheese",
    type: "Dinner",
    area:"NAmerica",
    hot: true,
    vegitarian: true
  },
  {
    food:"Clam Chowder",
    type: "Dinner",
    area:"NAmerica",
    hot: true,
    vegitarian: false
  },
  {
    food:"Chicago-style Pizza",
    type: "Dinner",
    area:"NAmerica",
    hot: true,
    vegitarian: false
  },
  {
    food:"New York-style Pizza",
    type: "Dinner",
    area:"NAmerica",
    hot: true,
    vegitarian: false
  },
  {
    food:"Pork Tenderloin",
    type: "Dinner",
    area:"NAmerica",
    hot: true,
    vegitarian: false
  },
  {
    food:"Hot Dog and Sweet Potato Fries",
    type: "Dinner",
    area:"NAmerica",
    hot: true,
    vegitarian: false
  },
  {
    food:"Tigrillo",
    type: "Breakfast",
    area:"SAmerica",
    hot: true,
    vegitarian: false
  },
  {
    food:"Majadito",
    type: "Breakfast",
    area:"SAmerica",
    hot: true,
    vegitarian: false
  },
  {
    food:"Bollo",
    type: "Breakfast",
    area:"SAmerica",
    hot: false,
    vegitarian: false
  },
  {
    food:"Empanadas",
    type: "Breakfast",
    area:"SAmerica",
    hot: true,
    vegitarian: false
  },
  {
    food:"Venezuelan Perico",
    type: "Breakfast",
    area:"SAmerica",
    hot: true,
    vegitarian: true
  },
  {
    food:"Arepas - Griddle Corncakes",
    type: "Breakfast",
    area:"SAmerica",
    hot: false,
    vegitarian: true
  },
  {
    food:"Ceviche",
    type: "Lunch",
    area:"SAmerica",
    hot: true,
    vegitarian: false
  },
  {
    food:"Brigadeiros",
    type: "Lunch",
    area:"SAmerica",
    hot: false,
    vegitarian: true
  },
  {
    food:"Chorizo",
    type: "Lunch",
    area:"SAmerica",
    hot: true,
    vegitarian: false
  },
  {
    food:"Cheese Tamales",
    type: "Lunch",
    area:"SAmerica",
    hot: true,
    vegitarian: true
  },
  {
    food:"Torta Pascualina",
    type: "Lunch",
    area:"SAmerica",
    hot: true,
    vegitarian: true
  },
  {
    food:"Brazillian Shrimp and Okra Gumbo",
    type: "Lunch",
    area:"SAmerica",
    hot: false,
    vegitarian: false
  },
  {
    food:"Chimichurri Chicken en Croute",
    type: "Lunch",
    area:"SAmerica",
    hot: true,
    vegitarian: false
  },
  {
    food:"South American Green Noodles",
    type: "Dinner",
    area:"SAmerica",
    hot: true,
    vegitarian: true
  },
  {
    food:"Causa Rellena con Pollo",
    type: "Dinner",
    area:"SAmerica",
    hot: false,
    vegitarian: false
  },
  {
    food:"Pabellon Criollo",
    type: "Dinner",
    area:"SAmerica",
    hot: true,
    vegitarian: false
  },
  {
    food:"Tortilla Espanola",
    type: "Dinner",
    area:"SAmerica",
    hot: true,
    vegitarian: true
  },
  {
    food:"Papa a la huancaina",
    type: "Dinner",
    area:"SAmerica",
    hot: false,
    vegitarian: true
  },
  {
    food:"Ackee and Saltfish",
    type: "Breakfast",
    area:"Europe",
    hot: true,
    vegitarian: false
  },
  {
    food:"Torta delle Rose",
    type: "Breakfast",
    area:"Europe",
    hot: false,
    vegitarian: true
  },
  {
    food:"Ollebrod",
    type: "Breakfast",
    area:"Europe",
    hot: false,
    vegitarian: true
  },
  {
    food:"Smazenice",
    type: "Breakfast",
    area:"Europe",
    hot: true,
    vegitarian: true
  },
  {
    food:"Devilled Kidneys",
    type: "Breakfast",
    area:"Europe",
    hot: true,
    vegitarian: false
  },
  {
    food:"WeiBwurste",
    type: "Breakfast",
    area:"Europe",
    hot: false,
    vegitarian: false
  },
  {
    food:"Caprese Salad",
    type: "Lunch",
    area:"Europe",
    hot: false,
    vegitarian: false
  },
  {
    food:"Spaghetti and Meatballs",
    type: "Lunch",
    area:"Europe",
    hot: true,
    vegitarian: false
  },
  {
    food:"Bratwurst",
    type: "Lunch",
    area:"Europe",
    hot: true,
    vegitarian: false
  },
  {
    food:"Raclette",
    type: "Lunch",
    area:"Europe",
    hot: false,
    vegitarian: true
  },
  {
    food:"Cacio e Pepe",
    type: "Lunch",
    area:"Europe",
    hot: true,
    vegitarian: true
  },
  {
    food:"Spagheti alle Vongole",
    type: "Lunch",
    area:"Europe",
    hot: false,
    vegitarian: false
  },
  {
    food:"Steak Tartare",
    type: "Dinner",
    area:"Europe",
    hot: false,
    vegitarian: false
  },
  {
    food:"Feijoada a Portuguesa",
    type: "Dinner",
    area:"Europe",
    hot: true,
    vegitarian: false
  },
  {
    food:"Lasagne alla Bolognese",
    type: "Dinner",
    area:"Europe",
    hot: true,
    vegitarian: true
  },
  {
    food:"Crostini",
    type: "Dinner",
    area:"Europe",
    hot: false,
    vegitarian: true
  },
  {
    food:"Steak Aui Poivre",
    type: "Dinner",
    area:"Europe",
    hot: true,
    vegitarian: false
  },
  {
    food:"Ratatouille",
    type: "Dinner",
    area:"Europe",
    hot: true,
    vegitarian: false
  },
  {
    food:"Many Varaties of Pizza",
    type: "Dinner",
    area:"Europe",
    hot: true,
    vegitarian: false
  },
  {
    food:"Gulyas",
    type: "Dinner",
    area:"Europe",
    hot: true,
    vegitarian: false
  },
  {
    food:"Vegtable and noodle Omelette",
    type: "Breakfast",
    area:"Asia",
    hot: true,
    vegitarian: true
  },
  {
    food:"Chicken Banh Mi",
    type: "Breakfast",
    area:"Asia",
    hot: true,
    vegitarian: false
  },
  {
    food:"Scrambled Egg Curry with Tomato Salsa",
    type: "Breakfast",
    area:"Asia",
    hot: true,
    vegitarian: false
  },
  {
    food:"Chicken Ginger Congee",
    type: "Breakfast",
    area:"Asia",
    hot: false,
    vegitarian: false
  },
  {
    food:"Mini Okonomiyaki",
    type: "Breakfast",
    area:"Asia",
    hot: false,
    vegitarian: true
  },
  {
    food:"Vietnamese Fresh Spring Rolls",
    type: "Lunch",
    area:"Asia",
    hot: false,
    vegitarian: true
  },
  {
    food:"Lumpia",
    type: "Lunch",
    area:"Asia",
    hot: true,
    vegitarian: true
  },
  {
    food:"Chicken Katsu",
    type: "Lunch",
    area:"Asia",
    hot: true,
    vegitarian: false
  },
  {
    food:"Thai Coconut Soup",
    type: "Lunch",
    area:"Asia",
    hot: true,
    vegitarian: true
  },
  {
    food:"Thai Noodle Salad",
    type: "Lunch",
    area:"Asia",
    hot: false,
    vegitarian: true
  },
  {
    food:"Vietnamese Fresh Spring Rolls",
    type: "Lunch",
    area:"Asia",
    hot: false,
    vegitarian: true
  },
  {
    food:"Chilli Chicken Stir Fry",
    type: "Lunch",
    area:"Asia",
    hot: true,
    vegitarian: false
  },
  {
    food:"Indian Lamb Curry",
    type: "Dinner",
    area:"Asia",
    hot: true,
    vegitarian: false
  },
  {
    food:"Chicken Biryani",
    type: "Dinner",
    area:"Asia",
    hot: true,
    vegitarian: false
  },
  {
    food:"Shrimp in Lobster Sauce with Rice",
    type: "Dinner",
    area:"Asia",
    hot: false,
    vegitarian: false
  },
  {
    food:"Chow Mein",
    type: "Dinner",
    area:"Asia",
    hot: true,
    vegitarian: true
  },
  {
    food:"Chicken and Sesame Noodles",
    type: "Dinner",
    area:"Asia",
    hot: false,
    vegitarian: true
  },
  {
    food:"Thai Peanut Shrimp",
    type: "Dinner",
    area:"Asia",
    hot: true,
    vegitarian: false
  }
]