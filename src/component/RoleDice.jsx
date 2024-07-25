import React from 'react'
import styled from "styled-components";

export const RoleDice = () => {
  return (
    <RoleObject>
        <div>
        <img src="/image/dice/dice_1.png" alt="dice1" />
        </div>
        <p>Click on Dice to roll</p>
    </RoleObject>
  )
}

const RoleObject = styled.div`
  
 
 display: flex;
 align-items: center;
 flex-direction: column;
 margin-top:48px ;
  `
  