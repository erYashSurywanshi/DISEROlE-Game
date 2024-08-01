import "./App.css"
import Gameplay from "./component/Gameplay";
import Startgame from "./component/startgame";
import { useState } from "react";

function App() {
  const [isGamestart,setIsGamestart] =useState();

  const toggleGameplay =()=>{
     setIsGamestart((prev) => !prev)
     
  }
  return (
    <>
         {isGamestart?<Gameplay/> :<Startgame toggle={toggleGameplay}/>}
  
    </>
  )
}

export default App

