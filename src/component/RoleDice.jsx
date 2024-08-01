import React, { useState } from 'react'
import styled from "styled-components";

export const RoleDice = ({disechange,rollDice}) => {

  var audio = new Audio("/image/dice-95077.mp3")


  return (
    <RoleObject>

        
        <div className='dise'
        onClick={()=>{
           audio.play() 
          rollDice()
        }}
        o
        >
        <img src={`/image/dice/dice_${disechange }.png`}  alt="dice1"  />
        </div>
        <p>Click on Dice to roll</p>
    </RoleObject>
  )
}

const RoleObject = styled.div`
  
 
 display: flex;
 justify-content: center;
 flex-direction: column;
 align-items: center;
 margin-top:10vh ;
 
.dise{
    cursor: pointer;
}
 p{
  font-size: 25px;
  font-family:Poppins;
  font-weight: 500;
}
  `

  