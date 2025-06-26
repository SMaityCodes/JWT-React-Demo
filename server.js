const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());

const SECRET_KEY = 'your-secret-key'; // In production, store in env variables

// Mock login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
   
  // Basic dummy check (replace with real user check)
  if (username === 'Maity' && password === 'abcd') {
    // Create a token payload
    const payload = { username };

    // Sign the token
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });

    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Protected route
app.get('/protected', (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token required' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    res.json({ message: 'Access granted ABcd', user: decoded });
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on httttp://localhost:${PORT}`);
});

