import { useState } from 'react';
import { signIn } from './services/fetch-utils';

export default function AuthPage() {

  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const user = await signIn(email, password);
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          email
          <input value={signInEmail} onChange={(e) => setSignInEmail(e.target.value)} />
        </label>
        <label>
          password
          <input value={signInPassword} onChange={(e) => setSignInPassword(e.target.value)} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}