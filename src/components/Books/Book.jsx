import useBooksInList from '../../hooks/useBooksInList';
import './Book.scss';

const Book = ({ cover, id }) => {
  // const { addToLocal } = useBooks();
  const { addToLocal } = useBooksInList();

  return (
    <li className='book'>
      <img className='book__img' src={cover} alt='' />
      <button className='book__btn' onClick={() => addToLocal(id)}>
        ADD to list
      </button>
    </li>
  );
};

export default Book;
