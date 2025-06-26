import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('password');
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:3000/login', {
        username,
        password,
      });
      const receivedToken = res.data.token;
      setToken(receivedToken);
      localStorage.setItem('token', receivedToken);
      setMessage('Login successful!');
    } catch (err) {
      setMessage('Login failed.');
    }
  };

  const accessProtectedRoute = async () => {
    try {
      const res = await axios.get('http://localhost:3000/protected', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMessage(`Protected message: ${res.data.message}`);
    } catch (err) {
      setMessage('Access denied or token expired.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
    setMessage('Logged out.');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>JWT Authentication Demo</h2>

      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />{' '}
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{' '}
        <br />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout} disabled={!token}>
          Logout
        </button>
        <button onClick={accessProtectedRoute} disabled={!token}>
          Access Protected
        </button>
      </div>

      <p>{message}</p>
    </div>
  );
}

export default App;

