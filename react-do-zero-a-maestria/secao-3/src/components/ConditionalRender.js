import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(false);

  const [name, setName] = useState("José");

  return (
    <div>
      <h1>If simples</h1>
      {x && <p>Se x for true</p>}
      {!x && <p>Se x for falso</p>}

      <h1>If ternário</h1>
      {name === "João" ? (
        <div>
          <p>O nome é João</p>
        </div>
      ) : (
        <div>
          <p>Nome nao encontrado</p>
        </div>
      )}
      <button onClick={() => setName("João")}>Mudar nome</button>
    </div>
  );
};

export default ConditionalRender;
