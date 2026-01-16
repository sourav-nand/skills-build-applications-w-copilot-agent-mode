import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;

  useEffect(() => {
    console.log('Fetching Users from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const items = data.results || data;
        setUsers(items);
        console.log('Fetched Users:', items);
      })
      .catch(err => console.error('Error fetching users:', err));
  }, [endpoint]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Users</h2>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>#</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={user.id || idx}>
              <td>{idx + 1}</td>
              <td>{JSON.stringify(user)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
