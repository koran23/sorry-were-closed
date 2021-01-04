'use strict';
module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define('Venue', {
    name: DataTypes.STRING,
    totalOccupacy: DataTypes.INTEGER,
    summary: DataTypes.TEXT,
    address: DataTypes.TEXT,
    hasKitchen: DataTypes.BOOLEAN,
    hasAirCon: DataTypes.BOOLEAN,
    hasHeating: DataTypes.BOOLEAN,
    hasInternet: DataTypes.BOOLEAN,
    pricePerDay: DataTypes.INTEGER,
    ownerId: DataTypes.INTEGER,
    typeOfVenue: DataTypes.STRING
  }, {});
  Venue.associate = function(models) {
    // associations can be defined here
    Venue.belongsTo(models.User, {
      foreignKey: "ownerId",
    });
  };
  return Venue;
};