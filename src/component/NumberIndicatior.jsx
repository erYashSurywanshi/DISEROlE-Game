import React from 'react'
import { useState } from 'react';
import styled from "styled-components";

const NumberIndicatior = () => {

    const arrNumber= [1,2,3,4,5,6]

    const [SelectNumber,setSelectNumber] = useState();

  return (
    <NUmberstylecontainer>
        <div>
        {arrNumber.map((value,i)=>(
            
            <Box 
            isSelected= {value === SelectNumber}
            key={i} onClick={()=>setSelectNumber(value)}>{value}</Box>
       ))}
        </div>
        <p>Select Number</p>
    </NUmberstylecontainer>
  )
}

export default NumberIndicatior

const NUmberstylecontainer = styled.div`

    
    
    div{
        display: flex;
        gap: 10px;
        margin-top: 20px;
        padding: 10px;
    }
    p{
        font-size: 24px;
        font-weight: 600;
        margin-top: 10px;
        display: flex;
        justify-content: end;
    }
`

const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  font-weight: 800;
  cursor: pointer;
  background-color: ${(props)=>(props.isSelected ? "black" : "white")};
  color: ${(props)=>(!props.isSelected ? "black" : "white")};

  `