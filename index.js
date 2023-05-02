
const express = require('express')
const cors = require('cors')
// const cors = require('cors')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5200
app.use(cors())  
const chefsProfile = require('./data/chefsProfile.json');
const recipes = require('./data/recipes.json');


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/chefsProfile-all', (req, res) => {
  res.json(chefsProfile)
})
app.get('/recipes-all', (req, res) => {
  res.json(recipes)
})
app.get('/recipes/regions', (req, res) => {
    const regions = recipes.map(x=>x.strArea)
   const regionList = regions.filter((value, index, array) => array.indexOf(value) === index)
  res.json(regionList)
})
app.get('/recipes/category', (req, res) => {
    const category = recipes.map(x=>x.strCategory)
   const regionList = category.filter((value, index, array) => array.indexOf(value) === index)
  res.json(regionList)
})
app.get('/recipes/:chef_id', (req, res) => {
    const {chef_id} = req.params
    const chefsResList = chefsProfile.find(x=>x._id ===chef_id)
    if(chefsResList){
        
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
    }
     
      )

      chefsResList.recipes = x;
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
    const chefsProfil = chefsProfile.find(c =>c.recipes.includes(id) )
    const yourRecipe = {
        recipe,
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