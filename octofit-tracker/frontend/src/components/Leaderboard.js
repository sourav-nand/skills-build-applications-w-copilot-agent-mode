import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;

  useEffect(() => {
    console.log('Fetching Leaderboard from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const items = data.results || data;
        setLeaderboard(items);
        console.log('Fetched Leaderboard:', items);
      })
      .catch(err => console.error('Error fetching leaderboard:', err));
  }, [endpoint]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Leaderboard</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Entry</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((entry, idx) => (
            <tr key={entry.id || idx}>
              <td>{idx + 1}</td>
              <td>{JSON.stringify(entry)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
