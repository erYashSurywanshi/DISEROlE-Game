import React from 'react'
import styled from 'styled-components'

export const Rule = () => {
  return (
    <Rulecontainer>
        <h1>Game Rules</h1>
        <p>1. Choose a number between 1-6</p>
        <p>2. Roll the dice and get the number shown</p>
        <p>3. If the number matches your chosen number, you win 5 points</p>
        <p>4. If the number does not match your chosen number, you lose 1 point</p>
        <p>5. The game ends when you either win 10 points or lose all your points</p>
    </Rulecontainer>
  )
}

const Rulecontainer = styled.div`
  
  background-color: #ef82946f;
  padding: 10px;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 10px;
`