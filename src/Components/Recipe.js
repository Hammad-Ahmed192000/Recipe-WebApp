import React from 'react'
import IngredientsList from './IngredientsList'

function Recipe(props) {
    const {
        id,
        name, 
        cookTime,
        servings,
        instructions,
        ingredients,
        handleRecipeDelete
    } = props

  return (
    <div>
        <div className='recipe-list-div'>
        <div className='recipe-list-row1'>
            <h3>{name}</h3>
            <div>
                <button className='edit-btn'>Edit</button>
                <button 
                    className='delete-btn'
                    onClick={() => handleRecipeDelete(id)}
                >
                    Delete
                </button>
            </div>            
        </div>

        <div>
            <span className='span-style'>Cooking Time: </span>
            <span> {cookTime} </span>
        </div>
        <div>
            <span className='span-style'> Serving Time: </span>
            <span> {servings}</span>
        </div>
        <div>
            <span className='span-style'>Instructions: </span>
            <div className='instructions-gap marg-left'>
                {instructions}
            </div>
        </div>

        <div className='span-style'>Ingredients: </div>
        <div className='marg-left'>
            <span>
                <IngredientsList ingredients={ingredients}/>
            </span>
        </div>
    </div>
    <hr className="horizontal-line" />
    </div>
    
  )
}

export default Recipe