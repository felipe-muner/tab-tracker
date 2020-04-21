const { Bookmark } = require("../models");

module.exports = {
  async index(req, res) {
    const { songId, userId } = req.query;
    console.log(songId);

    const bookmark = await Bookmark.findOne({
      where: {
        UserId: userId,
        SongId: songId,
      },
    });
    res.send(bookmark);
  },
};
