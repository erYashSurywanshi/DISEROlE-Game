import React from 'react'
import styled from "styled-components";

const Startgame = ({toggle}) => {
  return (
    <Container>
        <img src='/image/dices 1.png'/>
       <div>
       <h1>DICE GAME</h1>
        <Button onClick={toggle} >Play Now</Button>
       </div>
    </Container>
  )
}

export default Startgame

const Container = styled.div`
    display: flex;
    align-items:center;
    margin: 0 auto ;
    max-width: 1182px;
    height: 100vh;
    
    div{
        display: flex;
        flex-direction: column;
        align-items: end;
    }
    h1{
        font-size: 96px;
        font-weight: 1000;
        white-space: nowrap;
        
    }
`
const Button = styled.button`

    background-color: black;
    color: white;
    border-radius: 0.5vh;
    width: 220px;
    padding: 10px;
    cursor: pointer;
    font-weight: 600;
    transition: 0.5s background ease;
    border: 1px solid transparent;

    &:hover{
        background-color:white;
        border: 1px solid black;
        color: #000000;
        transition: 0.3s background ease;
    }
`