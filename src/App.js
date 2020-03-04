import React from 'react';
import './App.css';
import Login from './Views/Login';
import ItemsList from './Views/ItemsList';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Container>
      <Router>
      <Switch>
        <Route exact={true} path='/' component={Login} />
        <Route exact={true} path='/itemlist' component={ItemsList} />
      </Switch>
      </Router>
    </Container>
  );
}

export default App;
