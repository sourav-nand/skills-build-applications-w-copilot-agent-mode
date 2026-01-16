import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;

  useEffect(() => {
    console.log('Fetching Workouts from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const items = data.results || data;
        setWorkouts(items);
        console.log('Fetched Workouts:', items);
      })
      .catch(err => console.error('Error fetching workouts:', err));
  }, [endpoint]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Workouts</h2>
      <table className="table table-light">
        <thead>
          <tr>
            <th>#</th>
            <th>Workout</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((workout, idx) => (
            <tr key={workout.id || idx}>
              <td>{idx + 1}</td>
              <td>{JSON.stringify(workout)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Workouts;
