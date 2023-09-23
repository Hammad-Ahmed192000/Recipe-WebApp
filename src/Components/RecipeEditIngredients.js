import React from 'react'

function RecipeEditIngredients({ingredient}) {
  return (
    <div className='recipe-edit-ingredients'>

    <div style={{
        display:'flex',
        gap:'10px',
        margin:'20px',
        
    }}>
        <input 
            type="text" 
            id='name' 
            value={ingredient.name}
        />
        <input 
            type="text" 
            id='amount'
            value={ingredient.amount}
        />
        <button className='delete-btn '>x</button>
    </div>
        
    </div>
  )
}

export default RecipeEditIngredients