import './RecipeList.css';
import { Link } from 'react-router-dom';
import React from 'react'
import { useTheme } from '../hooks/useTheme';
import Trashcan from '../assets/trashcan.svg'
import { projectFirestore } from "../firebase/config"

function RecipeList({recipe}) {
	const { mode } = useTheme()
	

	if (recipe.length === 0) {
		return <div className='error'>No recipes to load...</div>
	}

	//deleting documents
	const handleClick = (id) => {
		projectFirestore.collection('recipes').doc(id).delete()
	}

  return (
	 <div className='recipe-list'>
		{recipe.map(recipe => (
			<div key={recipe.id} className={`card ${mode}`}>
				<h3>{recipe.title}</h3>
				<p>{recipe.cookingTime} to make.</p>
				<div>{recipe.method.substring(0, 100)}...</div>
				<Link to={`/recipes/${recipe.id}`}>Cook This</Link>
				<img 
            className="delete"
            onClick={() => handleClick(recipe.id)}
            src={Trashcan} alt="delete icon" 
          />
			</div>
		))}
	 </div>
  )
}

export default RecipeList
