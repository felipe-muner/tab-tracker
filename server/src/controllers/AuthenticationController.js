const { User } = require("../models");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK,
  });
}

module.exports = {
  async getAll(req, res) {
    try {
      const users = await User.findAll();
      res.send(users);
    } catch (error) {
      console.log(error);
      res.status(400).send({
        error: error,
      });
    }
  },
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      console.log("async login(req, res) {");
      console.log(user);
      console.log("async login(req, res) {");
      res.send(user.toJSON());
    } catch (error) {
      console.log(error);
      res.status(400).send({
        error: error,
      });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(403).send({
          error: "The login information is incorrect. there is not user",
        });
      }

      const isPasswordValid = await user.comparePassword(password);

      if (!isPasswordValid) {
        return res
          .status(403)
          .send({ error: "The login information is incorrect. Password" });
      }
      const userJson = user.toJSON();
      res.send({
        user: userJson,
        token: jwtSignUser(userJson),
      });
    } catch (error) {
      res.status(500).send({
        error: "An error has occured trying to log in.",
      });
    }
  },
};
