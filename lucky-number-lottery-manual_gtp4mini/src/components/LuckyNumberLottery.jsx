import { useState } from 'react'
import './LuckyNumberLottery.css'

export default function LuckyNumberLottery() {
  const [drawnNumbers, setDrawnNumbers] = useState([])
  const [currentNumber, setCurrentNumber] = useState(null)
  
  const numbers = Array.from({ length: 100 }, (_, i) => i + 1)
  
  const drawNumber = () => {
    const availableNumbers = numbers.filter(num => !drawnNumbers.includes(num))
    if (availableNumbers.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableNumbers.length)
      const newNumber = availableNumbers[randomIndex]
      setCurrentNumber(newNumber)
      setDrawnNumbers([...drawnNumbers, newNumber])
    }
  }
  
  return (
    <div className="lottery-container">
      <h2 className="lottery-title">Lucky Number Lottery</h2>
      <div className="draw-section">
        <button 
          className="draw-button"
          onClick={drawNumber}
          disabled={drawnNumbers.length === 100}
        >
          Draw Number
        </button>
        {currentNumber && (
          <div className="current-number-display">
            <span className="current-number">{currentNumber}</span>
          </div>
        )}
      </div>
      
      <div className="number-grid">
        {numbers.map(number => (
          <div
            key={number}
            className={`number-cell ${drawnNumbers.includes(number) ? 'drawn' : ''}`}
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  )
}
