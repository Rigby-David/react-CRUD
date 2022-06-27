import { Link } from 'react-router-dom';


export default function Book({ book }) {
  return <Link to={`/books/${book.id}`}>
    <p>{book.title} by {book.author}</p>
  </Link>;
}