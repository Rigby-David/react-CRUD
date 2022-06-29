import { client } from 'client';

export async function signIn(email, password) {
  const { data } = await client.auth.signIn({ email: email, password: password});
  return data;
}