import useBooks from '../../hooks/useBooks';
import Book from './Book';

const RowBooks = () => {
  const { booksFiltered } = useBooks();

  if (!booksFiltered.length) return <p>NO HAY LIBROS ;__;</p>;

  return booksFiltered.map(({ book }) => <Book key={book.id} {...book} />);
};

export default RowBooks;
