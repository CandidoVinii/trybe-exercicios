const express = require('express')
const author = require('./models/author')
const books = require('./models/books')
const app = express()
const port = 3000

app.get('/authors', async (req, res) => {
   const authors = await author.getAllAuthors();

   res.status(200).json(authors)
});

app.get('/books', async (req, res) => {
  const book = await books.getAllBooks();

  res.status(200).json(book);
});

app.get('/bookForId', async (req, res) => {
  const { id } = req.query;
  const bookForId = (id)
  ? await books.getAuthorId(id)
  : res.status(404).json({ message: 'Book not found' });
  res.status(200).json(bookForId);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))