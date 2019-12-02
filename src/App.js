import React from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap'
import{ Switch, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import History from './Components/History';
import PlTitles from './Components/PLTitles';
import AddTeam from './Components/AddTeam';
import PremierLeague from './Components/PremierLeague';
import Teams from './Components/Teams';
import TeamItems from './Components/TeamItems';


function App() {
  return (
    <BrowserRouter>
    
      <div className="App">
      <Navbar bg="primary" variant="dark">
      <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Teams">Teams</Nav.Link>
      <Nav.Link href="/table">Table</Nav.Link>
      <Nav.Link href="/titles">Titles</Nav.Link>
      


      </Nav>
      </Navbar>
      
      <br />
      <Switch>
      <Route path='/' component={ History } exact />
      <Route exact path='/table' component={ PremierLeague} />
      <Route path='/titles' component={ PlTitles} />
      <Route path='/Teams' component={ Teams } />
      <Route path='/addTeam' component={ AddTeam } />
      <Route path='/teamitems' component={ TeamItems } />

      </Switch>

      </div>
      
      </BrowserRouter>
  
  );
}

export default App;
