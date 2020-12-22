'use strict';
module.exports = (sequelize, DataTypes) => {
  const VenueType = sequelize.define('VenueType', {
    venueId: DataTypes.INTEGER,
    venueType: DataTypes.STRING
  }, {});
  VenueType.associate = function(models) {
    // associations can be defined here
  };
  return VenueType;
};