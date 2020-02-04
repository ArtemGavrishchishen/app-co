const path = require('path');
const fs = require('fs');

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }

  try {
    const usersPath = path.join(__dirname, '../', 'data', 'users.json');

    fs.readFile(usersPath, 'utf8', function(err, contents) {
      const users = JSON.parse(contents);
      req.users = users;
      next();
    });
  } catch (e) {
    res.status(404).json({ message: 'Error' });
  }
};
