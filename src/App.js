import React from 'react';
import HeaderNav from './components/HeaderNav';
import UtilityNav from './components/UtilityNav';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateEntryForm from './components/CreateEntryForm';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';

function App() {
  const dictionaryEntries = [
    {
      id: 1,
      key: "test word",
      value: "test definition"
    },
  ]

  return (
    <Container fluid>
      <Router>
        <div>
          <HeaderNav />
          <UtilityNav />
          <CreateEntryForm />



          <Footer />
        </div>

      </Router>
    </Container>



  );
}

export default App;

//CreateEntryForm will be the default view

//Set up array as props, pass props into Entries component when finished setting up props

{/* <p>THIS IS A SPACER</p>
<p>THIS IS A SPACER</p> */}


