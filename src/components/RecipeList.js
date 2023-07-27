import './RecipeList.css';
import { Link } from 'react-router-dom';

import React from 'react'
import { useTheme } from '../hooks/useTheme';

function RecipeList({recipe}) {
	const { mode } = useTheme()
	


	if (recipe.length === 0) {
		return <div className='error'>No recipes to load...</div>
	}

  return (
	 <div className='recipe-list'>
		{recipe.map(recipe => (
			<div key={recipe.id} className={`card ${mode}`}>
				<h3>{recipe.title}</h3>
				<p>{recipe.cookingTime} to make.</p>
				<div>{recipe.method.substring(0, 100)}...</div>
				<Link to={`/recipes/${recipe.id}`}>Cook This</Link>
			</div>
		))}
	 </div>
  )
}

export default RecipeList
