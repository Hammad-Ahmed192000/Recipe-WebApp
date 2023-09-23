import React, { useContext }from 'react'
import RecipeEditIngredients from './RecipeEditIngredients'
import { RecipeContext } from '../App'

function RecipeEdit({recipe}) {

    // using useContext here for handleRecipeChange function
    const { handleRecipeChange } = useContext(RecipeContext);

    // function for handle changes we made using edit section
    function handleChange(changes){
        handleRecipeChange(recipe.id, {...recipe, ...changes});
    }


    // handleChange({name:'new Name'});

  return (
    <div className="recipe-edit">
        <div className='recipe-edit-remove-btn-div'>
            <button className='recipe-edit-remove-btn'> &times; </button>
        </div>

        <div className='recipe-edit-details-grid'>
            <label htmlFor='name' className='recipe-edit-label'> Name </label>
            <input 
                type='text' 
                name='name' 
                id='name' 
                className='recipe-edit-input'
                onInput={e => handleChange({name: e.target.value})}
                value={recipe.name}                  
            />

            <label htmlFor='cookTime' className='recipe-edit-label'> Cook Time </label>
            <input 
                type='text' 
                name='cookTime' 
                id='cookTime' 
                className='recipe-edit-input' 
                value={recipe.cookTime}
            />

            <label htmlFor='servings' min= '1' className='recipe-edit-label'> Servings </label>
            <input 
                type='number' 
                name='servings' 
                id='servings' 
                className='recipe-edit-input' 
                value={recipe.servings}
            />

            <label htmlFor='instructions' className='recipe-edit-label'> Instructions </label>
            <textarea 
                name="instructions" 
                id="instructions" 
                cols="30" rows="10"
                value={recipe.instructions}
            ></textarea>

            
        </div>
        <br />


        <label htmlFor=""> Ingredients</label>            

        <div style={{
            display: 'flex',
            gap:'140px',
            margin: '20px 20px 0px 20px',
            // fontWeight:'light'
        }}>
            <div> Name </div>
            <div> Amount </div>                    
        </div>

        {recipe.ingredients.map(ingredient => {
            return (
                <RecipeEditIngredients 
                    key={ingredient.id}
                    ingredient={ingredient}
                />
            )
        })}

        {/* These components are now dynamically populated  */}
            {/* <RecipeEditIngredients />
            <RecipeEditIngredients /> */}


        <div style={{
            display: 'flex',
            margin: '10px 20px 20px 130px',            
        }}>
            <button className='add-btn'> Add Ingredients </button>
        </div>
            

    </div>
  )
}

export default RecipeEdit