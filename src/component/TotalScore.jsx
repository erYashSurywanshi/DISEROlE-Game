import React from 'react'
import styled from "styled-components";

const TotalScore = () => {
  return (
    <div>
       <Score>
       <h1>0</h1>
        <p>Total Score</p>
       </Score>
    </div>
  )
}

export default TotalScore

const Score = styled.div`
  width: 40vh;
  text-align: center;


  h1{
    font-size: 4rem;
    font-weight: bold;
    color: #333;
    
  }
  p{
    font-size: 1.5rem;
    font-weight: 400;
    color: #999;
  }
    `