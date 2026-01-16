import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;

  useEffect(() => {
    console.log('Fetching Teams from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const items = data.results || data;
        setTeams(items);
        console.log('Fetched Teams:', items);
      })
      .catch(err => console.error('Error fetching teams:', err));
  }, [endpoint]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Teams</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, idx) => (
            <tr key={team.id || idx}>
              <td>{idx + 1}</td>
              <td>{JSON.stringify(team)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Teams;
