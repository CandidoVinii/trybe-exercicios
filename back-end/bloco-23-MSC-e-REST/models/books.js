const connection = require('./connection');


const serializeBooks = (books) => {
  return {
    id: books.id,
    title: books.title,
    authorId: books.author_id
  }
}
const getAuthorId = async (auhorId) => {
  const query = 'SELECT * FROM model_example.books WHERE author_id=?;';

  const [books] = await connection.execute(query, [auhorId]);

  return books.map(serializeBooks);
}
const getAllBooks = async () => {
  const [books] = await connection.execute('SELECT id, title, author_id FROM books');

  return books.map(serializeBooks);
}

module.exports = {
  getAllBooks,
  getAuthorId
}