import './App.css';

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import CreatePage from './CreatePage';
import AuthPage from './AuthPage';
import ListPage from './ListPage';
import UpdatePage from './UpdatePage';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Sign in</Link>
            </li>
            <li>
              <Link to="/discs">Discs List</Link>
            </li>
            <li>
              <Link to="/discs/1">Update a Disc</Link>
            </li>
            <li>
              <Link to="/create/">Create a Disc</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/create">
            <CreatePage />
          </Route>
          <Route exact path="/">
            <AuthPage />
          </Route>
          <Route exact path="/discs">
            <ListPage />
          </Route>
          <Route exact path="/discs/:id">
            <UpdatePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

