import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

  useEffect(() => {
    console.log('Fetching Activities from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const items = data.results || data;
        setActivities(items);
        console.log('Fetched Activities:', items);
      })
      .catch(err => console.error('Error fetching activities:', err));
  }, [endpoint]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Activities</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Activity</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, idx) => (
            <tr key={activity.id || idx}>
              <td>{idx + 1}</td>
              <td>{JSON.stringify(activity)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Activities;
