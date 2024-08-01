import React, { useState } from 'react'
import Score from './TotalScore'
import NumberIndicatior from './NumberIndicatior'
import styled from "styled-components";
import { RoleDice } from './RoleDice';
import { Button } from './style/Button';
import { Outlinebutton } from './style/Button';
import { Rule } from './rule/rule';



const Gameplay = () => {

  const [finalscore,setfinalscore]=useState(0)
  const [SelectNumber,setSelectNumber] = useState();
  const [disechange,setdisechange]=useState(1)
  const [error,seterror]=useState('')
  const [rule,setrule]=useState(false)

  function disenumber(min, max) {

    return Math.floor(Math.random() * (max - min) + min);
  }
  const rollDice=()=>{
    if(!SelectNumber){
      seterror('Please select a number')
      return ;
    }
    seterror("")
    const randomnumber =disenumber(1,7)
    setdisechange((prev)=>randomnumber)

    if(SelectNumber==randomnumber){ 
      setfinalscore((prev)=> prev+ randomnumber)
    }
    else{
      setfinalscore((prev)=> prev - 2)
    }

    setSelectNumber(undefined)

  }
  function resetnumbers(){
    setfinalscore(0)
  }
  function soundonclick(){
    const audio = new Audio('/image/select-sound-121244.mp3');
    audio.play();
  }

  return (
       <MainContainer>
        <div className='top_section'>
        <Score finalscore={finalscore} />
        <NumberIndicatior
        error={error}
        SelectNumber={SelectNumber}
        setSelectNumber={setSelectNumber}
        />
        </div>
        <RoleDice rollDice={rollDice}
        disechange={disechange}
        />
        <div className='btn'>
          <Outlinebutton onClick={()=>{
            soundonclick()
            resetnumbers()
            seterror("")
          }}>Reset</Outlinebutton>
          <Button
          onClick={()=>{setrule((prev)=>!prev)
            soundonclick()
          }}> {rule?"Hide":"Show"} Rules</Button>

          {rule &&<Rule/>}
        </div>
       </MainContainer>
       
  )
}

export default Gameplay;

const MainContainer = styled.div`

.top_section
  {
  display: flex;
  justify-content: space-between;
  max-height: 100vh;
}
.btn{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 15px;
  width: 100%;
}
  `