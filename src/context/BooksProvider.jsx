import { createContext, useState } from 'react';
import { library as initialBooks } from '../db/books.json';

const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState(initialBooks);
  const [search, setSearch] = useState('');
  const [pages, setPages] = useState(0);
  const [gender, setGender] = useState('all');

  // const [localBooks, setLocalBooks] = useState([]);

  // const addToLocal = id => {
  //   const addedToLocal = books.find(({ book }) => book.id === id);

  //   setLocalBooks(prevBooks => [...prevBooks, addedToLocal]);
  // };

  // useEffect(() => {
  //   if (localBooks.length) {
  //     const filteredBooks = books.filter(book => {
  //       return !localBooks.some(
  //         bookInList => bookInList.book.id === book.book.id
  //       );
  //     });
  //     setBooks(filteredBooks);
  //   }
  // }, [localBooks]);

  let booksFiltered = filterByName(books, search);
  booksFiltered = filterByPages(booksFiltered, pages);
  booksFiltered = filterByGender(booksFiltered, gender);

  return (
    <BooksContext.Provider
      value={{
        setBooks,
        booksFiltered,
        setSearch,
        pages,
        setPages,
        setGender
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

const filterByName = (books, search) => {
  if (!search) return books;

  const loweCaseSearch = search.toLowerCase();

  return books.filter(({ book }) =>
    book.title.toLowerCase().startsWith(loweCaseSearch)
  );
};
const filterByPages = (books, pages) => {
  if (!pages) return books;

  return books.filter(({ book }) => book.pages >= pages);
};
const filterByGender = (books, gender) => {
  if (gender === 'all') return books;
  const lowerCaseGender = gender.toLowerCase();

  return books.filter(
    ({ book }) => book.gender.toLowerCase() === lowerCaseGender
  );
};

export default BooksContext;
