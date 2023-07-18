import { useContext } from 'react';
import BooksContext from '../context/BooksProvider';

const useBooks = () => useContext(BooksContext);

export default useBooks;
