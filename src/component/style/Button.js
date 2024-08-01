import styled from "styled-components";

export const Button = styled.button`

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
export const Outlinebutton = styled(Button)`

background-color: white;
color: black;
border: 1px solid black;
&:hover{
        background-color:black;
        border: 1px solid transparent;
        color: white;
        
    }
    
`