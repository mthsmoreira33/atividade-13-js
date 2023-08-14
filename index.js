const data = [
  {
    nome: "Roger Medeiros",
    sexo: "M",
    salario: 3250,
  },
  {
    nome: "Carolina Silva",
    sexo: "F",
    salario: 1200,
  },
  {
    nome: "Cristina Avila",
    sexo: "F",
    salario: 8100,
  },
  {
    nome: "Gustavo Hoffman",
    sexo: "M",
    salario: 5200.35,
  },
  {
    nome: "Eva Trindade",
    sexo: "F",
    salario: 2501,
  },
  {
    nome: "Andre Mathias",
    sexo: "M",
    salario: 1750,
  },
  {
    nome: "Joice Castro da Silva",
    sexo: "F",
    salario: 3350.25,
  },
];

console.log(`Total de Pessoas: ${data.length}`);

const dataFem = data.filter(element => element.sexo === "F");

console.log(`Total de Mulheres: ${dataFem.length}`);

const sum = data.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.salario
}, 0);

console.log(`Soma dos salários: ${sum}`);
console.log(`Média dos salários: ${sum / data.length}`);

const dataMale = data.filter(element => element.sexo === 'M');
const sumMaleWages = dataMale.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.salario
},0);

console.log(`Soma dos salários dos homens: ${sumMaleWages}`);
console.log(`Média de salários dos homens: ${sumMaleWages / dataMale.length}`);

console.log(data.some(element => element.salario > 7000));

console.log(data.findIndex(element => element.nome === 'Eva Trindade'));

console.log(data.map(element => {
  const fullName = element.nome.split(" ");
  return fullName[fullName.length - 1];
}));

console.log(data.map(element => element.nome));
