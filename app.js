// === Importing Modules
const express = require('express');
const path = require('path');

// === Define variables
const app = express();
const PORT = process.env.PORT || 5000;

// === Configuration
app.use(express.json({ extended: true }));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// === Routes
app.use('/users', require('./routes/users.routes'));
app.use('/user', require('./routes/user.routes'));

// === Deploy
if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// === ConnectDB && start server
function start() {
  app.listen(PORT, () =>
    console.log('Server was started at http://localhost:' + PORT)
  );
}

start();
