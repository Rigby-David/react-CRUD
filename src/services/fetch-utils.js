import { client } from './services/client';

export async function getBooks() {
  const response = await client.from('books').select('*');
  return response.data;
}