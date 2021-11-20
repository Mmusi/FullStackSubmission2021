import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (good === 0 & neutral === 0 & bad === 0) {
    return (
      <p>No feedback is given</p>
    )
  }
  return (
    <table>
      <tbody>
        <tr><Statistic feedback="Good" value={good} /></tr>
        <tr><Statistic feedback="Neutral" value={neutral} /></tr>
	    <tr><Statistic feedback="Bad" value={bad} /></tr> 
        <tr><Statistic feedback="Average" value={average} /></tr>   		
		<tr><Statistic feedback="All" value={all} /></tr>
        <tr><Statistic feedback="Positive" value={positive + '%'} /></tr>
      </tbody>
    </table>
  )
}

const Statistic = ({ feedback, value }) => {
  return (
    <td>{feedback} {value}</td>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () =>
    setGood(good + 1)

  const handleNeutralClick = () =>
    setNeutral(neutral + 1)

  const handleBadClick = () =>
    setBad(bad + 1)

  const all = good + neutral + bad
  const average = ((good - bad) / all) * 100
  const positive = (good / all) * 100

  return (
    <>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
    </>
  )
}

export default App