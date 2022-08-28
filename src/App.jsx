import { useState, useEffect } from 'react'
import { nanoid } from "nanoid"
import './App.css'
import Start from "./components/Start"
import Questions from "./components/Questions"

export default function App() {
  const [start, setStart] = useState(false)
  const [isHeld, setIsHeld] = useState(allNewAnswers())
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=31&type=multiple")
      .then(response => response.json())
      .then(data => setQuestions(data.results))
  }, [])

  function generateNewAnswer() {
    return {
      value: "",
      isHeld: false,
      id: nanoid()
    }
  }

  function allNewAnswers() {
    const answers = []
    for(let i = 0; i < 5; i++) {
      answers.push(generateNewAnswer())
    }
    return answers
  }

  function holdAnswer(id) {
    setIsHeld(prevAnswer => {
      return prevAnswer.map((ans) => {
        return ans.id === id ? {...ans, isHeld: !ans.isHeld} : {...ans}
      })
    })
  }

  function startGame() {
    setStart(true)
  }

  console.log(isHeld)

  return (
    <div className="App">
      {!start? <Start startGame={startGame}/> : <Questions questions={questions} isHeld={isHeld} holdAnswer={holdAnswer}/>}
    </div>
  )
}
