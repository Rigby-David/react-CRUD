import { client } from './services/client';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import { logout } from './services/fetch-utils';
import AuthPage from './AuthPage';
import ListPage from './ListPage';
import CreatePage from './CreatePage';
import UpdatePage from './UpdatePage';

export default function App() {

  const [user, setUser] = useState(client.auth.user());

  async function handleLogout() {
    await logout();
    setUser('');
  }

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Sign in</Link>
            </li>
            <li>
              <Link to="/books">Book List</Link>
            </li>
            <li>
              <Link to="/create">Add a Book</Link>
            </li>

            <li>
              {user &&
              <button onClick={handleLogout}>Logout</button>}
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path="/">
          {
            !user
              ? <AuthPage setUser={setUser}/>
              : <Redirect to="/books" />
          }
        </Route>
        <Route exact path="/books">
          {
            user
              ? <ListPage />
              : <Redirect to="/" />
          }
        </Route>
        <Route exact path="/create">
          <CreatePage />
        </Route>
        <Route exact path="/books/:id">
          <UpdatePage />
        </Route>
      </Switch>
    </Router>
  );
}
