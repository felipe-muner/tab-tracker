const { Bookmark } = require("../models");

module.exports = {
  async index(req, res) {
    try {
      const { songId, userId } = req.query;
      let bookmark;
      if (req.query.songId) {
        bookmark = await Bookmark.findOne({
          where: {
            UserId: userId,
            SongId: songId,
          },
        });
      } else {
        bookmark = await Bookmark.findAll();
      }

      res.send(bookmark);
    } catch (error) {
      res.status(500).send({ error: "error to get index bookmark" });
    }
  },

  async post(req, res) {
    try {
      const bookmark = await Bookmark.create(req.body);
      res.send(bookmark);
    } catch (error) {
      res.status(500).send({
        error: "error to post a bookmark",
      });
    }
  },

  async delete(req, res) {
    try {
      console.log(req.params);
      const { bookmarkId } = req.params;
      const bookmark = await Bookmark.findByPk(bookmarkId);
      await bookmark.destroy();
      res.send(bookmark);
    } catch (error) {
      res.status(500).send({
        error: "error to unbookmark a song.",
      });
    }
  },
};
