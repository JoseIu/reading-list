import './App.scss';
import BooksAdded from './components/BooksAdded';
import Header from './components/Header';
import ListOfBooks from './components/ListOfBooks';
import { BooksInListProvider } from './context/BooksInListProvider';
import { BooksProvider } from './context/BooksProvider';

const App = () => {
  return (
    <BooksProvider>
      <BooksInListProvider>
        <Header />
        <main>
          <ListOfBooks />
          <BooksAdded />
        </main>
      </BooksInListProvider>
    </BooksProvider>
  );
};

export default App;
