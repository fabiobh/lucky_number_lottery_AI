import { useState } from 'react'

export default function Cards() {
  const [cards, setCards] = useState([])
  const [name, setName] = useState('')

  const addCard = () => {
    if (name.trim()) {
      setCards([...cards, { id: Date.now(), name, numbers: [] }])
      setName('')
    }
  }

  return (
    <div className="cards-container">
      <h2>Create Lottery Cards</h2>
      <div className="add-card-form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter player name"
          className="name-input"
        />
        <button onClick={addCard} className="add-button">Add Player</button>
      </div>
      <div className="cards-list">
        {cards.map(card => (
          <div key={card.id} className="card">
            <h3>{card.name}'s Card</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
