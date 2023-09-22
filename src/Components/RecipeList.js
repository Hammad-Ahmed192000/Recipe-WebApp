import React from 'react'
import Recipe from './Recipe'
import { useContext } from 'react'
import { RecipeContext } from '../App'


function RecipeList({recipes}) {
    // const value = useContext(RecipeContext); // new in this code for useContext
    const {handleRecipeAdd} = useContext(RecipeContext);

  return (
    <div>
        <div className='recipe-list'>
            {recipes.map(recipe => {
                    return (
                        <Recipe 
                            key={recipe.id}
                            {...recipe}
                            // handleRecipeDelete={handleRecipeDelete}
                        /> 
                    )
                })}

    <div className='add-recipe-btn'>
            <button className='add-btn' onClick={handleRecipeAdd}>
                    Add Recipe
                </button>
            </div>
        </div>
        

    </div>    
  )
}

export default RecipeList