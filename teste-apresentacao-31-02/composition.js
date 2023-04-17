const composition = (...fns) => {
  return (valor) => {
    return fns.reduce((acc, fn) => fn(acc), valor);
  };
};

const verifyLength = (string) =>
  string.length === 11 ? string : "CPF invalido";

const removeCharactersThatArentNumbers = (string) => {
  return string.replace(/\D+/g, "");
};

function addCPFMask(cpf) {
  return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
}

const cpfMascara = composition(
  removeCharactersThatArentNumbers,
  verifyLength,
  addCPFMask
);

console.log(cpfMascara("12345678901"));
