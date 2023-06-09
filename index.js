
const express = require('express')
const cors = require('cors')
// const cors = require('cors')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5200
app.use(cors())  
const chefsProfile = require('./data/chefsProfile.json');
const recipes = require('./data/recipes.json');
const countryName = require('./data/countryName.json');
const countries = require('./data/countries.json');
const blogs = require('./data/blog.json');


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/chefsProfile-all/:limit', (req, res) => {
  const limit = req.params.limit
  const chefs =  chefsProfile.filter((item, idx) => idx < limit)

  res.json(chefs)
})
app.get('/chefsProfile-all', (req, res) => {
  res.json(chefsProfile)
})
app.get('/blogs', (req, res) => {
  res.json(blogs)
})
app.get('/blogs/:id', (req, res) => {
  const id = req.params.id

  const blog = blogs.find(x=>x._id ===id)
  res.json(blog)
})
app.get('/country', (req, res) => {  
  res.json(countryName)
  
})

app.get('/recipes-all', (req, res) => {
  res.json(recipes)
})
app.get('/recipes-all/:limit', (req, res) => {
  const limit = req.params.limit
  const recipesLimited =  recipes.filter((item, idx) => idx < limit)

  res.json(recipesLimited)
})
app.get('/recipes/regions', (req, res) => {
    const regions = recipes.map(x=>x.strArea)
   const regionList = regions.filter((value, index, array) => array.indexOf(value) === index)
  res.json(regionList)
})


app.get('/recipes/category', (req, res) => {
    const category = recipes.map(x=>x.strCategory)
   const categoryList = category.filter((value, index, array) => array.indexOf(value) === index)
  res.json(categoryList)
})



app.get('/recipes/:chef_id', (req, res) => {
    const {chef_id} = req.params
    const chefsResList = chefsProfile.find(x=>x._id ===chef_id)

    if(chefsResList){
      const {name} = chefsResList
      const bio = `${name} is a culinary prodigy whose passion has taken him around the world. Experienced in French, Italian, and Asian cuisine, he has earned repute in the kitchen as well as recognition among the food critics.`
        
      const x =  chefsResList.recipes.map(x=>{
        let newMeal = {}
        recipes.forEach(y=>{
        if(y.idMeal === x){
            const strIngredients = {};
            for (let i = 1; i <= 20; i++) {
                const ingredient = y[`strIngredient${i}`];
                const measure = y[`strMeasure${i}`];
                if (ingredient && measure) {
                    strIngredients[ingredient] = measure;
                }
            }
            // console.log(strIngredients);
             newMeal = {
                ...y,
                strIngredients: strIngredients,
            };
        } 
      })

      return newMeal
    })
      chefsResList.recipesNew = x;
      chefsResList.bio = bio;
      res.json(chefsResList);
    } else  res.send('recipe not Found')
})
app.get('/origin/:origin', (req, res) => {
    const {origin} = req.params
    // console.log(origin);
    const recipeList = recipes.filter(x=>x.strArea.toLowerCase() === origin.toLowerCase())
    if(recipeList){      
        res.send(recipeList)
    } else {
        res.send('recipe not Found')
    }  
})


app.get('/recipe/:id', (req, res) => {
    const {id} = req.params
    const recipe = recipes.find(x=> x.idMeal === id)
   
    let newRecipe ={}

    if(recipe.idMeal){
      const strIngredients = {};
      for (let i = 1; i <= 20; i++) {
          const ingredient = recipe[`strIngredient${i}`];
          const measure = recipe[`strMeasure${i}`];
          if (ingredient && measure) {
              strIngredients[ingredient] = measure;
          }
      }
      // console.log(strIngredients);
      // console.log(strIngredients);
      newRecipe = {
          ...recipe,
          strIngredients: strIngredients,
      };
      console.log(newRecipe); 
  } 
  const chefsProfil = chefsProfile.find(c =>c.recipes.includes(id) )
    const yourRecipe = {
      recipe: newRecipe,
        chefsProfil
    }
  res.json(yourRecipe)
})
/** search by alphabet */

app.get('/recipe/alpha/:alpha', (req, res) => {
    const {alpha} = req.params
    // console.log(alpha);
    const sercecipes = recipes.filter(x=> x.strMeal.toLowerCase().startsWith(alpha.toLowerCase()))
  res.json(sercecipes)
})
/** search by strCategory */

app.get('/recipe/strCategory/:strCategory', (req, res) => {
    const {strCategory} = req.params
    // console.log(strCategory);
    const sercecipes = recipes.filter(x=> x.strCategory.toLowerCase() === strCategory.toLowerCase())
  res.json(sercecipes)
})


//testing routes
app.get('/foods/:origin', (req, res) => {
    const {origin} = req.params
    // console.log(origin);
    const recipeList = recipes.filter(x=>x.strArea.toLowerCase() === origin.toLowerCase())
    if(recipeList){      
        res.send(recipeList.map(x=>x.idMeal))
    } else {
        res.send('recipe not Found')
    }  
})
















app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})