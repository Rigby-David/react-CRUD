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
}

export async function createBook(book) {
  const { data } = await client.from('books').insert(book).single();
  return data;
}