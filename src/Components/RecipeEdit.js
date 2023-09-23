import React from 'react'
import RecipeEditIngredients from './RecipeEditIngredients'

function RecipeEdit() {
  return (
    <div className="recipe-edit">
        <div className='recipe-edit-remove-btn-div'>
            <button className='recipe-edit-remove-btn'> &times; </button>
        </div>

        <div className='recipe-edit-details-grid'>
            <label htmlFor='name' className='recipe-edit-label'> Name </label>
            <input type='text' name='name' id='name' className='recipe-edit-input' />

            <label htmlFor='cookTime' className='recipe-edit-label'> Cook Time </label>
            <input type='text' name='cookTime' id='cookTime' className='recipe-edit-input' />

            <label htmlFor='servings' min= '1' className='recipe-edit-label'> Servings </label>
            <input type='number' name='servings' id='servings' className='recipe-edit-input' />

            <label htmlFor='instructions' className='recipe-edit-label'> Instructions </label>
            <textarea name="instructions" id="instructions" cols="30" rows="10"></textarea>

            
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
                    

            <RecipeEditIngredients />
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