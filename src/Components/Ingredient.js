import React from 'react'

function Ingredient({name, amount}) {
  return (
    <>
        <div className='ingrediants-grid'>
            <span>{name}</span>  
            <span>{amount}</span>
        </div>
        
        <br />
    </>
  )
}

export default Ingredient