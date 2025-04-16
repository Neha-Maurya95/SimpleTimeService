const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const timestamp = new Date().toISOString();

  let ip = req.ip; // This will give you the IP address of the client
  if (ip.startsWith('::ffff:')) {
    ip = ip.substring(7);
  } else if (ip === '::1') {
    ip = '127.0.0.1'; // Localhost IPv4
  }

  const responseData = {
    timestamp: timestamp,
    ip: ip
  };
  res.json(responseData); // Send the response as JSON
});
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
