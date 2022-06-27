import { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils';

export default function AuthPage({ setUser }) {

  const [signUpEmail, setSignUpEmail] = useState('');
  const [signInEmail, setSignInEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  // async function handleSignUpSubmit(e) {
  //   e.preventDefault();

  //   const data = await signUp();

  //   setSignUpEmail(data);
  // }

  async function handleSignUpSubmit(e) {
    e.preventDefault();
    const user = await signUp(signUpEmail, signUpPassword);
    setUser(user);
  }

  async function handleSignInSubmit(e) {
    e.preventDefault();
    const user = await signIn(signInEmail, signInPassword);
    setUser(user);
  }

  return (
    <div>
      <form onSubmit={handleSignUpSubmit}>
        <p>
        Sign Up
        </p>
        <label>
            email
          <input onChange={(e) => setSignUpEmail(e.target.value)} value={signUpEmail} type="email" />
        </label>
        <label>
            password
          <input onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} type="password" />
        </label>
        <button>Sign Up</button>
      </form>
      <form onSubmit={handleSignInSubmit}>
        <p>
        Sign In
        </p>
        <label>
            email
          <input type="email" value={signInEmail} onChange={(e) => setSignInEmail(e.target.value)} />
        </label>
        <label>
            password
          <input type="password" value={signInPassword} onChange={(e) => setSignInPassword(e.target.value)} />
        </label>
        <button>Sign In</button>
      </form>
    </div>
  );
}