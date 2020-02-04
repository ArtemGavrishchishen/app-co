const path = require('path');
const fs = require('fs');

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }

  try {
    const statPath = path.join(
      __dirname,
      '../',
      'data',
      'users_statistic.json'
    );

    fs.readFile(statPath, 'utf8', function(err, contents) {
      const statistic = JSON.parse(contents);
      req.statistic = statistic;
      next();
    });
  } catch (e) {
    res.status(404).json({ message: 'Error' });
  }
};
