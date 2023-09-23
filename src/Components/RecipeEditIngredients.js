import React from 'react'

function RecipeEditIngredients() {
  return (
    <div className='recipe-edit-ingredients'>

   

    <div style={{
        display:'flex',
        gap:'10px',
        margin:'20px',
        
    }}>
        <input type="text" id='name' />
        <input type="text" id='amount'/>
        <button className='delete-btn '>x</button>
    </div>
        
    </div>
  )
}

export default RecipeEditIngredients