import { useEffect, useState } from 'react';
import { deleteBook, getBookById, updateBook } from './services/fetch-utils';
import { useHistory, useParams } from 'react-router-dom';

export default function UpdatePage() {
  const { push } = useHistory();
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    async function goFetch() {
      const book = await getBookById(id);
      setTitle(book.title);
      setAuthor(book.author);
    }
    goFetch();
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();

    await updateBook({
      title: title,
      author: author,
    }, id);

    setTitle('');
    setAuthor('');
    push('/books');
  }

  async function handleDelete() {
    await deleteBook(id);
    push('/books');
  }

  return (
    <div>
      <h2>Update a Book</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input onChange={(e) => setTitle(e.target.value)} value={title}/>
        </label>
        <label>
          Author
          <input onChange={(e) => setAuthor(e.target.value)} value={author}/>
        </label>
        <button>Submit</button>
      </form>
      <button onClick={handleDelete}>Delete Book</button>
    </div>
  );
}