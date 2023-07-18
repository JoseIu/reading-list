import { createContext, useEffect, useState } from 'react';
import { library as initialBooks } from '../db/books.json';
import useBooks from '../hooks/useBooks';

const BooksInListContext = createContext();

export const BooksInListProvider = ({ children }) => {
  const { setBooks } = useBooks();

  const [booksInList, sertBooksInList] = useState([]);

  const addToLocal = id => {
    const addedToLocal = initialBooks.find(({ book }) => book.id === id);

    // sertBooksInList(prevBooks => [...prevBooks, addedToLocal]);
    const addToLocal = [...booksInList, addedToLocal];
    sertBooksInList(addToLocal);
    localStorage.setItem('booksInStorage', JSON.stringify(addToLocal));
    console.log('addToLocal', addToLocal);
  };
  const deleteAdd = id => {
    // acutualizamos booksInList state
    const updateBooksInList = booksInList.filter(({ book }) => book.id !== id);
    sertBooksInList(updateBooksInList);

    // filtramos para books state
    const filteredBooks = initialBooks.filter(book => {
      return !updateBooksInList.some(
        bookInList => bookInList.book.id === book.book.id
      );
    });
    setBooks(filteredBooks);
    localStorage.setItem('booksInStorage', JSON.stringify(updateBooksInList));
  };

  useEffect(() => {
    const filteredBooks = initialBooks.filter(book => {
      return !booksInList.some(
        bookInList => bookInList.book.id === book.book.id
      );
    });
    setBooks(filteredBooks);
  }, [booksInList]);
  useEffect(() => {
    const storedBooksInList = JSON.parse(
      localStorage.getItem('booksInStorage')
    );
    sertBooksInList(storedBooksInList || []);
  }, []);

  return (
    <BooksInListContext.Provider
      value={{ booksInList, sertBooksInList, addToLocal, deleteAdd }}
    >
      {children}
    </BooksInListContext.Provider>
  );
};

export default BooksInListContext;
