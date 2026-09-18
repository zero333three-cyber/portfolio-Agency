const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.post('/api/contact', (req, res) => {
  const { name, email, company, projectType, budget, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill in the required fields.' });
  }

  console.log('Contact request received:', {
    name,
    email,
    company,
    projectType,
    budget,
    message,
  });

  return res.json({ status: 'success', message: 'Your request has been received. We will connect shortly.' });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

app.listen(port, () => {
  console.log(`ZeroThree Solutions API listening on http://localhost:${port}`);
});
