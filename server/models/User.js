module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: { type: DataTypes.STRING, unique: true, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    accessToken: { type: DataTypes.STRING }
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Calendar);
      }
    }
  });

  return User;
};