import { useState } from "react";

import "./App.css";

import city from "./assets/city.jpg";

import { ManageData } from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";

function App() {
  const name = "Matheus";
  const [userName] = useState("Joana");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Vermelha", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Branco", newCar: false, km: 3462 },
    { id: 3, brand: "Renault", color: "Azul", newCar: true, km: 237 },
  ];

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  function showMessage() {
    console.log("Evento do componente pai");
  }
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>

      <div>
        <img src={city} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />

      {/* props */}
      <ShowUserName name={name} />
      <ShowUserName name={userName} />

      {/* desestruturando props */}
      <CarDetails brand="Hyundai" km={0} color="branco" newCar={true} />
      <CarDetails brand="Ford" km={37829} color="vermelho" newCar={false} />
      <CarDetails brand="Fiat" km={89513} color="verde" newCar={false} />

      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          km={car.km}
          color={car.color}
          newCar={car.newCar}
        />
      ))}
      {/* children */}
      <Container myValue="testando">
        <p>E conteudo do container</p>
      </Container>

      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />

      {/* stateLift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
    </div>
  );
}

export default App;
