const sayHello = () => {
  return "Hello, ";
};

const greeting = (greetingMessage) => {
  return (name) => {
    return greetingMessage() + name;
  };
};

console.log(greeting(sayHello)("Matheus"));



