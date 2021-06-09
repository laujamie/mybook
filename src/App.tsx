import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
import { Heading, Container } from '@chakra-ui/react';
import HomeView from './views/HomeView';
import DetailsView from './views/DetailsView';

function App() {
  return (
    <div className="App">
      <Container maxW="container.lg">
        <Router>
          <Link to="/">
            <Heading my="2">MyBook</Heading>
          </Link>
          <Switch>
            <Route path="/person/:id">
              <DetailsView />
            </Route>
            <Route path="/" exact>
              <HomeView />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
