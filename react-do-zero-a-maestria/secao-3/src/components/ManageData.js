import { useState } from "react";

export const ManageData = () => {
  let someData = 10;

  const [number, setNumber] = useState(10);

  return (
    <div>
      <p>Valor: {someData}</p>
      <button onClick={() => (someData = 15)}>Mudar Variável</button>

      <p>Valor: {number}</p>
      <button onClick={() => setNumber(15)}>Hello World</button>
    </div>
  );
};
