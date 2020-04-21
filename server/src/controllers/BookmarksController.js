const { Bookmark } = require("../models");

module.exports = {
  async index(req, res) {
    const { songId, userId } = req.query;

    const bookmark = await Bookmark.findOne({
      where: {
        UserId: userId,
        SongId: songId,
      },
    });
    res.send(bookmark);
  },
};
