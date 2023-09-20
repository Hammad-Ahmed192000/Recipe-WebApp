import React from 'react'
import Recipe from './Recipe'


function RecipeList({recipes, handleRecipeAdd, handleRecipeDelete}) {
  return (
    <div>
        <div className='recipe-list'>
            {recipes.map(recipe => {
                    return (
                        <Recipe 
                            key={recipe.id}
                            {...recipe}
                            handleRecipeDelete={handleRecipeDelete}
                        /> 
                    )
                })}

    <div className='add-recipe-btn'>
                <button className='add-btn' 
                    onClick={handleRecipeAdd}
                >
                    Add Recipe
                </button>
            </div>
        </div>
        

    </div>    
  )
}

export default RecipeList