const User = require('../../models/user.model');

module.exports = {
  register: (req, res) => {
    const { username, password } = req;
    if (!username || !password) {
      res.status(401);
      return res.send({ status: 'fail', message: `Error creating user: ${err}`, data: {} });
    }
    const newUser = new User({username, password});
    return newUser.save()
      .catch((err) => {
        res.status(400);
        res.send({ status: 'fail', message: `Error creating user: ${err}`, data: {}});
      });
  },
  login: (req, res) => {

  }
};
