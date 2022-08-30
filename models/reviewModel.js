module.exports = (sequelize, DataTypes) => {
  const Reviwe = sequelize.define("reviwe", {
    rating: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.TEXT,
    },
  });
  return Reviwe;
};
