import './App.css';
import RecipeList from './Components/RecipeList';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [recipes, setRecipes] = useState(sampleRecipes)

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      cookTime: '1',
      servings: 1,
      instructions: '',
      ingredients: [
        {
          id: uuidv4(),
          name: 'Name',
          amount: '1 Tbs',
        },
        {
          id: uuidv4(),
          name: 'Name',
          amount: '1 Tbs',
        },
      ]
    }
    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeDelete(id){
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  }
  return (

    <div className="App">
      <h1 style={{
        textAlign:'center',        
      }}> Recipe App </h1>
          <div className='horizontal-line'></div>
      <RecipeList       
        recipes={recipes}
        handleRecipeAdd={handleRecipeAdd}
        handleRecipeDelete={handleRecipeDelete}
      />  

      <div className='vertical-line'></div>


    </div>

  );
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    cookTime: '1:45',
    servings: 3,
    instructions: '1. Put salt on Chicken\n2. Put chiken in oven\n3. Eat Chicken',
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 Pounds',
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs',
      },
    ]
  },
  {
    id: 2,
    name: 'Plain Beef',
    cookTime: '1:45',
    servings: 4,
    instructions: '1. Put salt on Beef\n2. Put Beef in oven\n3. Eat Beef',
    ingredients: [
      {
        id: 1,
        name: 'Beef',
        amount: '2 Pounds',
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '1 Tbs',
      },
    ]
  },
  
]
export default App;
