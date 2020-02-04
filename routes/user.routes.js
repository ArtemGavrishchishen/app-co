const { Router } = require('express');
const users = require('../middleware/users.middleware');
const statistic = require('../middleware/statistic.middleware');

const router = Router();

router.get('/:id', users, statistic, (req, res) => {
  try {
    const id = Number(req.params.id);
    const userList = req.users;
    const statisticList = req.statistic;

    const user = userList.find(user => user.id === id);
    if (user) {
      const statistic = statisticList.filter(
        statistic => statistic.user_id === id
      );

      res.status(200).json({ user, statistic });
    } else {
      return res.status(500).json({ message: 'User is not found' });
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

module.exports = router;
