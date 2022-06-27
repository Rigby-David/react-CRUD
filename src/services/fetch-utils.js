import { client } from './client';

export async function getBooks() {
  const response = await client.from('books').select('*');
  return response.data;
}

export async function signIn(email, password) {
  const { user, error } = await client.auth.signIn({ email: email, password: password });
  return user;
}

export async function signUp(email, password) {
  const { user } = await client.auth.signUp({ email: email, password: password });
  return user;
}
