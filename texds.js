const meal = {
    "idMeal": "52893",
    "strMeal": "Apple & Blackberry Crumble",
    "strDrinkAlternate": null,
    "strCategory": "Dessert",
    "strArea": "British",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg",
    "strTags": "Pudding",
    "strYoutube": "https://www.youtube.com/watch?v=4vhcOwVBDO4",
    "strIngredient1": "Plain Flour",
    "strIngredient2": "Caster Sugar",
    "strIngredient18": "",
    "strIngredient19": "",
    "strIngredient20": "",
    "strMeasure1": "120g",
    "strMeasure2": "60g",
    "strMeasure18": "",
    "strMeasure19": "",
    "strMeasure20": "",
    "strSource": "https://www.bbcgoodfood.com/recipes/778642/apple-and-blackberry-crumble"
  };
  
  const strIngredients = {};
  
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    
    if (ingredient && measure) {
      strIngredients[ingredient] = measure;
    }
  }
  
  const newMeal = {
    ...meal,
    strIngredients,
  };
  
  
  // https://b7a10-chef-recipe-hunter-server-side-majedul-hasan.vercel.app/foods/British


 
   
   
   
  
   
    
    
   
   

 
    
    
