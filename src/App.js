import React from 'react';
import './App.css';
import { UserProvider } from './Context/UserContext';
import Nav from './Components/Nav';
import Dashboard from './Components/Dashboard';

const App = () => {
  return (
    <UserProvider>
      <div className="app">
        <Nav />
        <Dashboard />
      </div>
    </UserProvider>
  );
};

export default App;
