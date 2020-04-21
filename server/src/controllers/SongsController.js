const { Songs } = require("../models");
const { Op } = require("sequelize");

module.exports = {
  async post(req, res) {
    try {
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
      let songs = null;
      const search = req.query.search;
      if (req.query.search) {
        songs = await Songs.findAll({
          where: {
            [Op.or]: [
              {
                title: {
                  [Op.like]: `%${search}%`,
                },
              },
              {
                artist: {
                  [Op.like]: `%${search}%`,
                },
              },
              {
                genre: {
                  [Op.like]: `%${search}%`,
                },
              },
              {
                album: {
                  [Op.like]: `%${search}%`,
                },
              },
            ],
          },
        });
      } else {
        songs = await Songs.findAll({
          limit: 10,
        });
      }
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
  async put(req, res) {
    try {
      const song = await Songs.update(req.body, {
        where: {
          id: req.params.songId,
        },
      });
      res.send(song);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        error: "error to get songs",
      });
    }
  },
};
