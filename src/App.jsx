import React, { useState, useEffect } from 'react';
import List from './components/List';
import Details from './components/Details';
import fetchData from './functions/fetchData';
import './css/list.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      const data = await fetchData('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data');
      setUsers(data);
    };

    loadUsers();
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="container">
      <List users={users} onUserClick={handleUserClick} />
      <Details info={selectedUser} />
    </div>
  );
};

export default App;
