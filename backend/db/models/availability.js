'use strict';
module.exports = (sequelize, DataTypes) => {
  const availability = sequelize.define('availability', {
    venueId: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {});
  availability.associate = function(models) {
    // associations can be defined here
  };
  return availability;
};