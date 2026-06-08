let books = [];

const getBooks = async (req, res) => {
  res.json(books);
};

const getBookById = async (req, res) => {
  const book = books.find(b => b._id === req.params.id);
  if (!book) return res.status(404).json({ message: 'Livro não encontrado' });
  res.json(book);
};

const createBook = async (req, res) => {
  const { title, author, genre, status, rating } = req.body;
  const newBook = {
    _id: Math.random().toString(36).substr(2, 9),
    title,
    author,
    genre,
    status,
    rating,
    createdAt: new Date()
  };
  books.push(newBook);
  res.status(201).json(newBook);
};

const updateBook = async (req, res) => {
  const { title, author, genre, status, rating } = req.body;
  const index = books.findIndex(b => b._id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Livro não encontrado' });
  
  books[index] = { ...books[index], title, author, genre, status, rating };
  res.json(books[index]);
};

const deleteBook = async (req, res) => {
  const index = books.findIndex(b => b._id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Livro não encontrado' });
  
  books.splice(index, 1);
  res.json({ message: 'Livro removido com sucesso' });
};

module.exports = { getBooks, getBookById, createBook, updateBook, deleteBook };
