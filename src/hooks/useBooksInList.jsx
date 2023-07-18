import { useContext } from 'react';
import BooksInListContext from '../context/BooksInListProvider';

const useBooksInList = () => useContext(BooksInListContext);

export default useBooksInList;
