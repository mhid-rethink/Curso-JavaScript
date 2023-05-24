import React from "react";

const Container = ({ children, myValue }) => {
  return (
    <div>
      <h2>Titulo do container</h2>
      {children}
      <p>O valor é: {myValue}</p>
    </div>
  );
};

export default Container;
