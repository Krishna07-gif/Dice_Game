import React, { useState } from 'react';
import StartGame from './components/StartGame';
import GamePlay from './components/GamePlay';

const App = () => {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () =>{
    setIsGameStarted((prev) => !prev);
  }
  return (
    <>
      {/* is jsx ke code me agr hme js ka code initialize krana h to hm curly braces ke andr krenge */}
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}  {/*use check for: agr game start hua to GamePlay component and agr nhi start hua to StartGame vala component use krenge    and toggleGamePlay vale function ko access krenge*/}
      
    </>
  );
}


export default App;



