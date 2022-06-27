import { client } from './client';

export async function getBooks() {
  const response = await client.from('books').select('*');
  return response.data;
}

export async function signIn(email, password) {
  const { user } = await client.auth.signIn({ email: email, password: password });
  return user;
}

export async function signUp(email, password) {
  const { user } = await client.auth.signUp({ email: email, password: password });
  return user;
}

export async function logout() {
  const { error } = await client.auth.signOut();
  return error;
}

export async function createBook(book) {
  const { data } = await client.from('books').insert(book).single();
  return data;
}

export async function getBookById(id) {
  const { data } = await client.from('books').select('*').match({ id }).single();
  return data;
}

export async function updateBook(book, id) {
  const { data } = await client.from('books').update(book).match({ id: id }).single();
  return data;
}

export async function deleteBook(id) {
  const { data } = await client.from('books').delete().match({ id: id }).single();
  return data;
}