'use strict';
module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define('Venue', {
    totalOccupacy: DataTypes.INTEGER,
    summary: DataTypes.TEXT,
    address: DataTypes.TEXT,
    hasKitchen: DataTypes.BOOLEAN,
    hasAirCon: DataTypes.BOOLEAN,
    hasHeating: DataTypes.BOOLEAN,
    hasInternet: DataTypes.BOOLEAN,
    pricePerDay: DataTypes.INTEGER,
    ownerId: DataTypes.INTEGER
  }, {});
  Venue.associate = function(models) {
    // associations can be defined here
    Venue.hasMany(models.Reservation, {
      foreignKey: "venueId",
    });
    Venue.hasMany(models.Review, {
      foreignKey: "venueId",
    });
    Venue.belongsTo(models.User, {
      foreignKey: "ownerId",
    });
    
  };
  return Venue;
};