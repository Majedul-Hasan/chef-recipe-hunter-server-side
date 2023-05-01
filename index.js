
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5200
app.use(cors())
const chefsProfile = require('./data/chefsProfile.json');
const recipes = require('./data/recipes.json');




app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/chefsProfile', (req, res) => {
  res.json(chefsProfile)
})
app.get('/recipes', (req, res) => {
  res.json(recipes)
})
app.get('/recipes/region', (req, res) => {
    const regions = recipes.map(x=>x.strArea)
   const regionList = regions.filter((value, index, array) => array.indexOf(value) === index)


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
            console.log(strIngredients);
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
    console.log(origin);
    const recipeList = recipes.filter(x=>x.strArea.toLowerCase() === origin.toLowerCase())
    if(recipeList){      
        res.send(recipeList)
    } else {
        res.send('recipe not Found')
    }  
})

//testing routes
app.get('/foods/:origin', (req, res) => {
    const {origin} = req.params
    console.log(origin);
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