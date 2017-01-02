module.exports = function(sequelize, DataTypes) {
  const Pokemon = sequelize.define('Pokemon', {
    name: DataTypes.STRING,
    // ...
  });
  return Pokemon;
};
