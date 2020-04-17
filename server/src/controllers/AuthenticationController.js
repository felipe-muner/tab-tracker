const { User } = require("../models");

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      res.send(user.toJSON());
    } catch (error) {
      res.status(400).send({
        error: "This e-mail is already in use",
      });
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res
          .status(403)
          .send({
            error: "The login information is incorrect. there is not user",
          });
      }

      const isPasswordValid = password === user.password;

      if (!isPasswordValid) {
        return res
          .status(403)
          .send({ error: "The login information is incorrect. Password" });
      }

      res.send(user.toJSON());
    } catch (error) {
      res.status(500).send({
        error: "An error has occured trying to log in.",
      });
    }
  },
};
