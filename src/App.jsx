import { useState } from "react";
import "./App.css";
import BookList from "./components/BookList";
import Panel from "./components/Panel";
import { books as initialBooks } from "./data/books";

export default function App() {
  const [books, setBooks] = useState(initialBooks);
  const availableCount = books.filter((book) => book.available).length;
  function handleToggleReserve(bookId) {
    setBooks((currentBooks) =>
      currentBooks.map((book) =>
        book.id === bookId
          ? { ...book, available: !book.available }
          : book
      )
    );
  }
  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">BIBLIOTECA ITEAM</p>
        <h1>Reserva de livros do acervo.</h1>
        <p>
          {availableCount} de {books.length} livros disponíveis.
        </p>
      </header>

      <Panel title="Acervo de Livros">
        <BookList books={books} onReserve={handleToggleReserve} />
      </Panel>
    </main>
  );
}