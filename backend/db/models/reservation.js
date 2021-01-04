'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    userId: DataTypes.INTEGER,
    venueId: DataTypes.INTEGER,
    startDate: DataTypes.TEXT,
    endDate: DataTypes.TEXT,
    total: DataTypes.INTEGER
  }, {});
  Reservation.associate = function(models) {
    // associations can be defined here
    Reservation.belongsTo(models.User, {
      foreignKey: "userId",
    });
    Reservation.belongsTo(models.Venue, {
      foreignKey: "venueId",
    });
  };
  return Reservation;
};