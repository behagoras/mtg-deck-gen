import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import TableData from './TableData';
import locust from '../data/locustGod2.json';
import ezuri from '../data/ezuri.json';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/locust">Locust God</Link>
            </li>
            <li>
              <Link to="/ezuri">Ezuri</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Switch>
          <Route exact path="/locust">
            <TableData data={locust} />
          </Route>
          <Route path="/ezuri">
            <TableData data={ezuri} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
