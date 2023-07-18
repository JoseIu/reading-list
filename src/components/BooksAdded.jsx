import useBooksInList from '../hooks/useBooksInList';
import './BooksAdded.scss';

const BooksAdded = () => {
  const { booksInList, deleteAdd } = useBooksInList();
  // console.log(booksInList);
  return (
    <section className='wrapper'>
      <h1>LIBROS GUARDADOS</h1>
      <div className='booksAdded'>
        {booksInList.map(({ book }) => (
          <article className='booksAdded__book' key={book.id}>
            <img src={book.cover} alt='' />
            <button onClick={() => deleteAdd(book.id)}>Quitar</button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BooksAdded;
