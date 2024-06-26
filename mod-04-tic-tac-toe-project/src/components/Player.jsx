import { useState } from "react"

export default function Player({ initialName, symbol, isActive, onChangeName }) {
	const [ playerName, setPlayerName ] = useState(initialName)
	const [isEditing, setIsEditing] = useState(false)
	
	function handleEditButtonClick() {
		setIsEditing(editing => !editing)
		isEditing && onChangeName(symbol, playerName)
	}

	function handleFocus(event) { event.target.select() }

	function handlePlayerNameChange(event) {
		setPlayerName(event.target.value)
	}

	return (
		<li className={isActive ? 'active' : ''}>
			<span className="player">
				{ isEditing
					? <input
						autoFocus
						onChange={handlePlayerNameChange}
						onFocus={handleFocus}
						required
						type="text"
						value={playerName}
					/>
					: <span className='player-name'>{playerName}</span>
				}
				<span className='player-symbol'>{symbol}</span>
			</span>
			<button onClick={handleEditButtonClick}>
				{ isEditing ? "Save" : "Edit" }
			</button>
		</li>
	)
}