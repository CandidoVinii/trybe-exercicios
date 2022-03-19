const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(arrays) {
  // escreva seu código aqui
  const formArray = arrays.reduce((acc, curr) => acc.concat(curr), []);
  return formArray;
}

console.log(flatten(arrays))