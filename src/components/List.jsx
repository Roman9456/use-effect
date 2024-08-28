import React from 'react';
import '../css/list.css';

const List = ({ users, onUserClick }) => {
  return (
    <div className="list">
      <ul>
        {users.map(user => (
          <li key={user.id} onClick={() => onUserClick(user)}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
