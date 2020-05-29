import React  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import Home from './pages/Home';

import './App.css';

const RouterSwitch = () => {
  const params = new URLSearchParams(useLocation().search);

  return (
    <Switch>
        <Route path="/about">
          test
        </Route>
        <Route path="/">
          <Home params={ params }/>
        </Route>
    </Switch>
  );
}

function App() {
  return (
    <Router>
      <RouterSwitch/>
    </Router>
  );
}

export default App;
