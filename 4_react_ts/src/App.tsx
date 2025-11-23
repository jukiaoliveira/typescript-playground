import React from "react";

// 4 - importação de componente
import FirstComponent from "./components/FirstComponent";

function App() {

  // 1 - variáveis
  const name: string = "Júlia";
  const age: number = 26;
  const isWorking: boolean = true;

  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  return (
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && <p>Está estudando!</p>}

      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
    </div>
  );
}

export default App;