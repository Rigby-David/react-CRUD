import { useState } from 'react';
import { createBook } from './services/fetch-utils';
import { useHistory } from 'react-router-dom';

export default function CreatePage() {
  const { push } = useHistory();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const book = await createBook({
      title: title,
      author: author,
    });
    console.log(book);
    setAuthor('');
    setTitle('');
    push('/books');
  }

  return (
    <div>
      <form>
        <label onSubmit={handleSubmit}>
          Title
          <input onChange={(e) => setTitle(e.target.value)} value={title}/>
        </label>
        <label>
          Author
          <input onChange={(e) => setAuthor(e.target.value)} value={author}/>
        </label>
        <button>Create book</button>
      </form>
    </div>
  );
}