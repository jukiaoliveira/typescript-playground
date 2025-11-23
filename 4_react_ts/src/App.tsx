import React from "react";

function App() {

  // 1 - variáveis
  const name: string = "Júlia";
  const age: number = 26;
  const isWorking: boolean = true;

  return (
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && <p>Está estudando!</p>}
    </div>
  );
}

export default App;