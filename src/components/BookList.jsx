import BookCard from "./BookCard";
export default function Booklist({ books }) {
    if (books.length === 0) {
        return <p>Nenhum livro no acervo.</p>;
    }
    return (
        <section className="book-list" aria-label="Lista de Livros">
            {books.map((book) => (
                <BookCard
                    key={book.id}
                    title={book.title}
                    author={book.author}
                    available={book.available}
                />
            ))}
        </section>
    );
}