import RowBooks from './Books/RowBooks';
import './ListOfBooks.scss';

const ListOfBooks = () => {
  return (
    <ul className='books wrapper'>
      <RowBooks />
    </ul>
  );
};

export default ListOfBooks;
