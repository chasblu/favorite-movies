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
    </div>
  );
}

export default App;
