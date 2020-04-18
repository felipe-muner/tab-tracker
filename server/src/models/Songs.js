module.exports = (sequelize, DataTypes) => {
  const Songs = sequelize.define("Songs", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    album: DataTypes.STRING,
    albumImage: DataTypes.STRING,
    youtubeID: DataTypes.STRING,
    lyrics: DataTypes.TEXT,
    tab: DataTypes.TEXT,
  });

  return Songs;
};
