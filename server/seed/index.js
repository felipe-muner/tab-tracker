const { sequelize, Songs, User, Bookmark } = require("../src/models");

const users = require("./users");
const songs = require("./songs");
const bookmarks = require("./bookmarks");

sequelize.sync({ force: true }).then(async function () {
  await Promise.all(
    users.map((user) => {
      User.create(user);
    })
  );

  await Promise.all(
    songs.map((song) => {
      Songs.create(song);
    })
  );

  setTimeout(async () => {
    await Promise.all(
      bookmarks.map((bookmark) => {
        Bookmark.create(bookmark);
      })
    );
  }, 100);
});
