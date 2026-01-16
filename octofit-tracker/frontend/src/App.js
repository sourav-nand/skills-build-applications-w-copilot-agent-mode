import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import Activities from './components/Activities';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">Octofit Tracker</a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/activities">Activities</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/teams">Teams</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/users">Users</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/workouts">Workouts</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <main className="container mt-4">
          <Routes>
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/" element={<div className="text-center">Welcome to Octofit Tracker!</div>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
