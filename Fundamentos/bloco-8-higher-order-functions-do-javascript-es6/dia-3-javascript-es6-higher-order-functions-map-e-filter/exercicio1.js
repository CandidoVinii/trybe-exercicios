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

  function formatedBookNames() {
    const result = books.map((books) => `${books.name} - ${books.genre} - ${books.author.name}`);

    return result;
  }

//console.log(formatedBookNames(books));


function nameAndAge() {
    const result = books.map((book) => (
      {
        age: book.releaseYear - book.author.birthYear,
        author: book.author.name,
      }
    ))
    .sort((a, b) => a.age - b.age);

    return result
}
  
//console.log(nameAndAge());

function fantasyOrScienceFiction() {
    const result = books.filter((books) => (
        books.genre === 'Ficção Científica' || books.genre === 'Fantasia'
    ))
    return result
  }

//console.log(fantasyOrScienceFiction(books))

function oldBooksOrdened(){
    const currentYear = new Date().getFullYear();
    const result =  books.filter((book) => (
        book.releaseYear < currentYear - 60
    )).sort ((a,b) => a.releaseYear - b.releaseYear);

    return result
}

//console.log(oldBooksOrdened(books));

function fantasyOrScienceFictionAuthors() {
    const genero = ['Ficção Científica', 'Fantasia'];
    return books
    .filter((book) => genero.includes(book.genre))
    .map((book) => book.author.name).sort()
  }

  console.log(fantasyOrScienceFiction(books))