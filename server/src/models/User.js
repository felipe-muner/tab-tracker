const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: DataTypes.STRING,
      password2: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: async (user) => {
          user.setDataValue("password", await bcrypt.hash(user.password, 8));
        },
      },
      instanceMethods: {
        felipePasswordBoladao: (password) => {
          console.log("felipePasswordBoladao: function (password) {");
        },
      },
    }
  );

  User.prototype.comparePassword = function (password) {
    bcrypt.compare(password, this.password, function (err, result) {
      result ? true : false;
    });
  };

  User.prototype.felipeTeste = function () {
    console.log("User.prototype.felipeTeste = function () {");
    console.log(this);
    console.log("User.prototype.felipeTeste = function () {");
  };

  return User;
};
