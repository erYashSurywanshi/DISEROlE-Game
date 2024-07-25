import React from 'react'
import Score from './TotalScore'
import NumberIndicatior from './NumberIndicatior'
import styled from "styled-components";
import { RoleDice } from './RoleDice';



const Gameplay = () => {
  return (
       <MainContainer>
        <div className='top_section'>
        <Score/>
        <NumberIndicatior/>
        </div>
        <RoleDice/>
       </MainContainer>
       
  )
}

export default Gameplay;

const MainContainer = styled.div`

.top_section
  {display: flex;
  justify-content: space-between;
  height: 100vh;
}
  `