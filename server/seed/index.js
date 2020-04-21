const { sequelize, Songs, User } = require("../src/models");

const users = require("./users");
const songs = require("./songs");

sequelize.sync({ force: true }).then(async function () {
  // await Promise.all(
  //   users.map((user) => {
  //     User.create(user);
  //   })
  // );

  await Promise.all(
    songs.map((song) => {
      Songs.create(song);
    })
  );
  // app.listen(config.port);
  // console.log(`server on 8081 ${config.port}`);
});
