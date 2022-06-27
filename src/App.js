import { client } from './services/client';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import AuthPage from './AuthPage';

export default function App() {

  const [user, setUser] = useState(client.auth.user());

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Sign in</Link>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
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
        <Route>
        </Route>
        <Route>
        </Route>
      </Switch>
    </Router>
  );
}
