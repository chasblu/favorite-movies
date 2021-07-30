import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem('token') ? true : false
  );
  return (
    <div className="App">
      <Nav />
      <main>
        <Switch>
          {/* <Route path='/'     />need to add render */}
          
        </Switch>
      </main>
    </div>
  );
}

export default App;
