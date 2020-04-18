const { Songs } = require("../models");

module.exports = {
  async index(req, res) {
    try {
      const songs = await Songs.findAll();
      res.send(songs);
    } catch (error) {
      console.log(error);
      res.status(400).send({
        error: error,
      });
    }
  },
};
