import './ThemeSelector.css';
import React from 'react'

import modeIcon from '../assets/mode-icon.svg'
import { useTheme } from "../hooks/useTheme"

	const themeColors = ['#420420', '#003366', '#bada55']

	export default function ThemeSelector() {
		const { changeColor, changeMode, mode } = useTheme()
	 
		const toggleMode = () => {
			changeMode(mode === 'dark' ? 'light' : 'dark')
		}

	 
		return (
		  <div className="theme-selector">
			 <div className="mode-toggle">
				<img 
				  onClick={toggleMode}
				  src={modeIcon}
				  style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }}
				  alt="dark/light toggle icon"
				/>
			 </div>
			 <div className="theme-buttons">
				{themeColors.map(color => (
				  <div 
					 key={color} 
					 onClick={() => changeColor(color)}
					 style={{ background: color }}
				  />
				))}
			 </div>
		  </div>
		)
	 }