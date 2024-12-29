// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import LuckyNumberLottery from './components/LuckyNumberLottery'
import Cards from './components/Cards'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={
            <>
              <LuckyNumberLottery />
              <Link to="/cards" className="create-cards-button">
                Create Cards
              </Link>
            </>
          } />
          <Route path="/cards" element={<Cards />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App