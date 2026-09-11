import BookCard from "./BookCard";
export default function Booklist({ books, onReserve }) {
    if (!books || books.length === 0) {
        return <p>Nenhum livro no acervo.</p>;
    }
    return (
        <section className="book-list" aria-label="Lista de Livros">
            {books.map((book) => (
                <BookCard
                    key={book.id}
                    {...book}
                    onReserve={onReserve}
                />
            ))}
        </section>
    );
}