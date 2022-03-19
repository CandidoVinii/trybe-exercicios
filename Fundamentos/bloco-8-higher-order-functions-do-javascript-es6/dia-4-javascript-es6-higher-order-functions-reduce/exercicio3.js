const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  const getA = names.reduce((acc, curr) => 
    acc + curr.split('').reduce((accumulator, current) => {
      if(current === 'a' || current === 'A') return accumulator + 1;
        return accumulator;
    }, 0), 0);
  return getA;
}

console.log(containsA(names))