import express from 'express';

const app = express();
const port = 3000;

let visitorsCount = 0;

// TODO: Make this API can be accessed by any website
app.get('/', (req, res) => {
  // Handle the request and increment the visitor count
  // Here, we'll use a global variable to store the visitor count
  visitorsCount++;

  res.setHeader('Access-Control-Allow-Origin', '*');

  res.send(`${visitorsCount}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

