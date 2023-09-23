import React from 'react';
import './App.css';
import RecipeList from './Components/RecipeList';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import RecipeEdit from './Components/RecipeEdit';


export const RecipeContext = React.createContext();

// making key for local storage
const LOCAL_STORAGE_KEY = 'cookingWithReact.react';
function App() {
  
  const [recipes, setRecipes] = useState(sampleRecipes)  



  // this state is for Edit button, to populate RecipeEdit.js component
  const [selectedRecipeId, setSelectedRecipeId] = useState(); 
  
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)
  // console the selected recipe with all the ingredients
  console.log(selectedRecipe)
  
  // local storage Functionality code...

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
    return () => console.log("Recipe Set")
  },[recipes]);


  // const recipeContextValue = {
  //   handleRecipeAdd,
  //   handleRecipeDelete
  // }


  // all the handling functions are follows...

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

  function handleRecipeEdit(id){
    setSelectedRecipeId(id);
  }


  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeEdit,
  }

  return (

    <div className="App">
      {/* <h1 style={{
        textAlign:'center',        
      }}> Recipe App </h1>
       */}
      {/* <div className='horizontal-line'></div> */}

      <RecipeContext.Provider value={recipeContextValue}>
        
        <RecipeList recipes={recipes} />  

         {/* handleRecipeAdd={handleRecipeAdd}
         handleRecipeDelete={handleRecipeDelete} */}
        
      </RecipeContext.Provider>
      

      {/* <div className='vertical-line'></div> */}

        
        {/* Changes are also made it here  */}

      { selectedRecipe && <RecipeEdit recipe={selectedRecipe}/>}

    </div>

  );
}



// Sample Recipes are here
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
