// src/util/data.js

export const defaultRecipes = [
  {
    id: 1,
    title: "Spaghetti Bolognese",
    description: "A classic Italian pasta dish",
    ingredients: [
      "Spaghetti",
      "Ground beef",
      "Tomato sauce",
      "Onion",
      "Garlic",
    ],
    instructions:
      "Cook spaghetti according to package instructions. In a separate pan, cook ground beef with onion and garlic. Add tomato sauce and simmer. Serve sauce over spaghetti.",
    image:
      "https://tiffycooks.com/wp-content/uploads/2021/09/Screen-Shot-2021-09-21-at-5.21.37-PM.png",
    userId: "guest1",
  },
  {
    id: 2,
    title: "Chicken Curry",
    description: "A delicious chicken curry",
    ingredients: ["Chicken", "Curry powder", "Coconut milk", "Onion", "Garlic"],
    instructions:
      "Cook chicken with onion and garlic. Add curry powder and coconut milk. Simmer until cooked through. Serve with rice.",
    image:
      "https://img.freepik.com/premium-psd/chicken-curry-png-transparent_1085577-1861.jpg?w=1060",
    userId: "guest2",
  },
  {
    id: 3,
    title: "Paneer Tikka",
    description: "A delicious Paneer Tikka",
    ingredients: ["Paneer", "Paneer Tikka masala", "Tomato", "Onion", "Curd"],
    instructions:
      "Cook by adding food acid, such as lemon juice, vinegar, citric acid or dahi (yogurt), to hot milk to separate the curds from the whey.",
    image:
      "https://sharethespice.com/wp-content/uploads/2024/02/Paneer-Tikka-Featured.jpg",
    userId: "guest3",
  },
  {
    id: 4,
    title: "Caesar Salad",
    description: "A classic Caesar salad with a creamy dressing",
    ingredients: [
      "Romaine lettuce",
      "Caesar dressing",
      "Croutons",
      "Parmesan cheese",
      "Chicken (optional)",
    ],
    instructions:
      "Toss romaine lettuce with Caesar dressing. Top with croutons and Parmesan cheese. Add grilled chicken if desired.",
    image:
      "https://assets.bonappetit.com/photos/624215f8a76f02a99b29518f/1:1/w_2800,h_2800,c_limit/0328-ceasar-salad-lede.jpg",
    userId: "guest4",
  },
  {
    id: 5,
    title: "Beef Tacos",
    description: "Delicious beef tacos with fresh toppings",
    ingredients: [
      "Ground beef",
      "Taco seasoning",
      "Taco shells",
      "Lettuce",
      "Tomato",
      "Cheese",
    ],
    instructions:
      "Cook ground beef with taco seasoning. Fill taco shells with beef and top with lettuce, tomato, and cheese.",
    image:
      "https://thumbs.dreamstime.com/b/delicious-ground-beef-tacos-fresh-toppings-served-black-plate-close-up-image-five-ai-generative-323251750.jpg",
    userId: "guest5",
  },
  {
    id: 6,
    title: "Vegetable Stir Fry",
    description: "A healthy and colorful vegetable stir fry",
    ingredients: [
      "Mixed vegetables (bell peppers, carrots, broccoli)",
      "Soy sauce",
      "Garlic",
      "Ginger",
      "Sesame oil",
    ],
    instructions:
      "Stir fry vegetables with garlic and ginger in sesame oil. Add soy sauce and cook until vegetables are tender.",
    image:
      "https://www.allrecipes.com/thmb/Gaf03LzXPR7W9UiAZClE4FkxKYg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Swanson-Chicken-and-Vegetable-Stir-Fry-4x3-1-2000-2c4a4b3d242f4cec86cd62a66863bcca.jpg",
    userId: "guest6",
  },
  {
    id: 7,
    title: "Chicken Alfredo",
    description: "Creamy chicken Alfredo pasta",
    ingredients: [
      "Fettuccine pasta",
      "Chicken breast",
      "Heavy cream",
      "Parmesan cheese",
      "Garlic",
    ],
    instructions:
      "Cook fettuccine pasta. In a separate pan, cook chicken with garlic. Add heavy cream and Parmesan cheese to make the Alfredo sauce. Combine with pasta.",
    image:
      "https://cdn.apartmenttherapy.info/image/upload/v1687538031/k/Photo/Recipes/2023-06-chicken-alfredo-pasta-reshoot/chicken-alfredo-pasta-1-vertical.jpg",
    userId: "guest7",
  },
  {
    id: 8,
    title: "Greek Salad",
    description: "A fresh and tangy Greek salad",
    ingredients: [
      "Cucumber",
      "Tomato",
      "Red onion",
      "Olives",
      "Feta cheese",
      "Olive oil",
      "Lemon juice",
    ],
    instructions:
      "Combine cucumber, tomato, red onion, and olives. Top with feta cheese and dress with olive oil and lemon juice.",
    image:
      "https://joyfoodsunshine.com/wp-content/uploads/2021/06/best-greek-salad-recipe-1.jpg",
    userId: "guest8",
  },
  {
    id: 9,
    title: "Chole Bhature",
    description: "Spicy chickpea curry with fluffy bread",
    ingredients: [
      "Chickpeas",
      "Onion",
      "Tomato",
      "Ginger",
      "Garlic",
      "Spices",
      "Flour",
      "Yogurt",
    ],
    instructions:
      "Prepare chole (chickpea curry) with spices. Make bhature dough, roll out, and deep fry until puffed. Serve together.",
    image:
      "https://en-media.thebetterindia.com/uploads/2022/08/294156779_1082267416022212_8006411537588067133_n-1_11zon-1660981126.jpg",
    userId: "guest9",
  },
  {
    id: 10,
    title: "Vegetarian Chili",
    description: "A hearty and flavorful vegetarian chili",
    ingredients: [
      "Kidney beans",
      "Black beans",
      "Tomatoes",
      "Corn",
      "Bell peppers",
      "Chili powder",
    ],
    instructions:
      "Cook beans, tomatoes, corn, and bell peppers with chili powder. Simmer until flavors meld.",
    image:
      "https://evergreenkitchen.ca/wp-content/uploads/2021/10/Vegan-Chili-Fries-with-Avocado-Cream-0-4X5.jpg",
    userId: "guest10",
  },
  {
    id: 11,
    title: "Shrimp Scampi",
    description: "Garlic shrimp pasta",
    ingredients: ["Shrimp", "Garlic", "Lemon", "Butter", "Pasta"],
    instructions:
      "Cook pasta. Sauté shrimp with garlic and butter. Toss with pasta and lemon juice.",
    image:
      "https://assets.bonappetit.com/photos/58a4e12a9fda6d7fbc740e91/1:1/w_2560%2Cc_limit/shrimp-scampi.jpg",
    userId: "guest11",
  },
  {
    id: 12,
    title: "Chocolate Cake",
    description: "Rich and moist chocolate cake",
    ingredients: [
      "Flour",
      "Cocoa powder",
      "Sugar",
      "Eggs",
      "Butter",
      "Vanilla extract",
    ],
    instructions:
      "Mix dry ingredients and wet ingredients separately, then combine and bake. Frost with chocolate icing.",
    image:
      "https://sugargeekshow.com/wp-content/uploads/2023/10/easy_chocolate_cake_slice.jpg",
    userId: "guest12",
  },
];
