import './App.sass';
import React from 'react';
import UserList from './Userlist/userlist';

const App = () => {
  let users = ['Vitor', 'Bachir', 'Victor', 'Quentin'];
  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <UserList users={users} />
    </div>
  );
};

export default App;
