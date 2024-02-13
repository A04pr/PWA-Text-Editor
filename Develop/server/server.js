const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const indexPath = path.join(__dirname, '../client/index.html');

app.use(express.static(path.join(__dirname, '../client')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(indexPath);
});

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => {
  console.log(`Now listening on port: ${PORT}`);
});