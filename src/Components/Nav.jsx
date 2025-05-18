import React, { useContext } from 'react';
import { UserContext } from '../Context/UserContext';

const Nav = () => {
  const { isLoggedIn, login, logout } = useContext(UserContext);

  return (
    <nav>
      <h1>App</h1>
      {isLoggedIn ? <span>Welcome, User!</span> : ''}
      {isLoggedIn ? <button onClick = {logout}>Logout</button> : <button onClick = {login}>Login</button>}
    </nav>
  );
};

export default Nav;