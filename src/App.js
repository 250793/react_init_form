import './App.css';
import Book from './components/Book';
import BookList from './pages/BookList';
import FormBook from './pages/FormBook';

function App() {

  const livros = [
    {
      id: "1",
      nome: "O príncipe"
    },
    {
      id: "2",
      nome: "Odisseia"
    }
    ,
    {
      id: "3",
      nome: "Dom Quixote"
    }
    ,
    {
      id: "4",
      nome: "Frankenstein"
    }
  ]


  return (
    <>
    <BookList/>
    {/* <FormBook/>
      <h1>Livros</h1>
      {livros.map(livro => (
        <Book livro={livro.nome} key={livro.id} />
      ))} */}
    </>
  );
}

export default App;