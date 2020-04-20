const { Songs } = require("../models");

module.exports = {
  async post(req, res) {
    console.log("to aqui");
    try {
      console.log("creat song");

      const song = await Songs.create(req.body);
      res.send(song);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        error: "error to create new song",
      });
    }
  },

  async index(req, res) {
    try {
      const songs = await Songs.findAll({
        limit: 10,
      });
      res.send(songs);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        error: "error to get songs",
      });
    }
  },
  async show(req, res) {
    try {
      const song = await Songs.findByPk(parseInt(req.params.songId));
      res.send(song);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        error: "error to get songs",
      });
    }
  },
};
