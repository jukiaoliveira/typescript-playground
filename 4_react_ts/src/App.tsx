import React from "react";

// 4 - importação de componente
import FirstComponent from "./components/FirstComponent";

// 5 - desestruturação de props
import SecondComponent from "./components/SecondComponent";
import Destructuring from "./components/Destructuring";

// 6 - useState
import State from "./components/State";

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
      <SecondComponent name="Segundo" />
      <Destructuring
        title="Primeiro post"
        content="Meu primeiro post com TS e React"
        commentsQty={10}
        tags={["ts", "react", "javascript"]}
      />
      <Destructuring
        title="Segundo post"
        content="Meu segundo agora com python"
        commentsQty={5}
        tags={["python"]}
      />
      <State />
    </div>
  );
}

export default App;
