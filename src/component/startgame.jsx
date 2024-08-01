import React from 'react'
import styled from "styled-components";
import { Button } from './style/Button';
const Startgame = ({toggle}) => {

    var audio = new Audio("/image/game-start-6104.mp3")
  return (
    <Container>
        <img src='/image/dices 1.png'/>
       <div>
       <h1>DICE GAME</h1>
        <Button onClick={()=>{
            audio.play()
            toggle()
        }} >Play Now</Button>
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
