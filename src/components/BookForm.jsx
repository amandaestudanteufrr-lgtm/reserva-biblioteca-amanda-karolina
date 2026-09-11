import { useState } from "react";
export default function BookForm({ onAddBook }) {
 const [form, setForm] = useState({ title: "", author: "" });
 const [error, setError] = useState("");
 function handleChange(event) {
 const { name, value } = event.target;
 setForm((currentForm) => ({
 ...currentForm,
 [name]: value,
 }));
 }
 function handleSubmit(event) {
 event.preventDefault();
 const title = form.title.trim();
 const author = form.author.trim();
 if (!title || !author) {
 setError("Preencha o título e o autor.");
 return;
 }
 onAddBook({
 id: crypto.randomUUID(),
 title,
 author,
 available: true,
 });
 setForm({ title: "", author: "" });
 setError("");
 }
 return (
 <form className="book-form" onSubmit={handleSubmit}>
 <div className="field">
 <label htmlFor="title">Título</label>
 <input
 id="title"
 name="title"
 taype="text"
 value={form.title}
 onChange={handleChange}
 placeholder="Ex.: Memórias Póstumas"
 />
 </div>
 <div className="field">
 <label htmlFor="author">Autor</label>
 <input
 id="author"
 name="author"
 taype="text"
 value={form.author}
 onChange={handleChange}
 placeholder="Ex.: Machado de Assis"
 />
 </div>
 {error && <p className="form-error">{error}</p>}
  <button type="submit">Cadastrar Livros</button>
 </form>
 );
}
