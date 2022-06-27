import { useEffect, useState } from 'react';
import Book from './Book';
import { getBooks } from './services/fetch-utils';

export default function ListPage() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function goFetch() {
      const data = await getBooks();
      setBooks(data);
    }
    goFetch();
  }, []);

  return (
    <div>
      {
        books.map((book, i) => <Book book={book} key={book.author + i + book.title} />)
      }
    </div>
  );
}