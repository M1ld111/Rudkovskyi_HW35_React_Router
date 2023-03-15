import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Users() {
  const [users, setUsers] = useState([]);

      useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(data => setUsers(data));
    }, []);

  return (
    <div className='main'>
      <h1>Users</h1>
      <ul className='users-ul'>
        {users.map(user => (
          <li key={user.id}>
            <span>{user.name}</span>
            <Link to={`/albums?userId=${user.id}`}>Albums</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;