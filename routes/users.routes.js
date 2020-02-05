const { Router } = require('express');
const users = require('../middleware/users.middleware');
const statistic = require('../middleware/statistic.middleware');

const router = Router();

router.get('/', users, statistic, (req, res) => {
  const { body } = req;
  const page = body.page || 1;
  const view = body.view || 16;
  console.log(req);
  try {
    const userList = req.users;
    const statisticList = req.statistic;

    const users = userList.map(user => {
      return {
        ...user,
        total_cliks: statisticList.reduce(
          (acc, current) =>
            acc + (current.user_id === user.id ? current.clicks : 0),
          0
        ),
        total_page_views: statisticList.reduce(
          (acc, current) =>
            acc + (current.user_id === user.id ? current.page_views : 0),
          0
        )
      };
    });

    const resultData =
      page === 1
        ? users.slice(0, view)
        : users.slice(page * view - view, page * view);

    // console.log('resultData', resultData);

    // const massage = 'Test routes: Database connection successful';
    res
      .status(200)
      .json({ users: resultData, maxPage: Math.ceil(users.length / view) });
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

module.exports = router;
