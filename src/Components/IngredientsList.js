import React from 'react'
import Ingredient from './Ingredient'

function IngredientsList({ingredients}) {
    const ingredientElements = ingredients.map(ingredient => {
        return (
            <Ingredient 
                key={ingredient.id}
                {...ingredient}
            />
        )
    })
  return (
    <>
        {ingredientElements}
    </>
  )
}

export default IngredientsList