import useBooks from '../hooks/useBooks';
import './Header.scss';
import SelectOption from './Header/SelectOption';

const Header = () => {
  const { setSearch, pages, setPages, setGender } = useBooks();
  return (
    <header className='header wrapper'>
      <input
        className='header__search'
        type='text'
        placeholder='Buscar...'
        name='search'
        onChange={e => setSearch(e.target.value)}
      />

      <div className='header__pages'>
        <input
          className='header__pages-range'
          type='range'
          name='pages'
          id='pages'
          min={'0'}
          max={'1300'}
          onChange={e => setPages(e.target.value)}
        />
        <label htmlFor='pages'>Nº Paginas{pages}</label>
      </div>
      <select
        className='header__select'
        name='select'
        id=''
        onChange={e => setGender(e.target.value)}
      >
        <SelectOption />
      </select>
    </header>
  );
};

export default Header;
