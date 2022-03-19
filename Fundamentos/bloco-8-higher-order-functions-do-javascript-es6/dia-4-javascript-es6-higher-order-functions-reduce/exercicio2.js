const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

function reduceNames() {
  // escreva seu código aqui
  const names = books.reduce((acc, book, i, array) => {
    if (i === array.length -1) return `${acc} ${book.author.name}.`;
    return `${acc} ${book.author.name},`
  }, '');
  return names;
};

console.log(reduceNames(books));

//3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

function averageAge() {
  // escreva seu código aqui
  const booksNumber = books.length;
  const sumAges = books.reduce((sum, book) => {
    sum + (book.releaseYear - book.author.birthYear)
  }, 0);
  return sumAges / booksNumber;
}

  console.log(averageAge(books))

// Encontre o livro com o maior nome.

function longesttNamedBook() {
  const longest = books.reduce((biggestBook, currentBook) => {
    if(currentBook.name.length > biggestBook.name.length) {
      return currentBook;
    }
    return biggestBook;
  })
  return longest;
}

console.log(longesttNamedBook(books));