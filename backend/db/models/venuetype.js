'use strict';
module.exports = (sequelize, DataTypes) => {
  const VenueType = sequelize.define('VenueType', {
    venueId: DataTypes.INTEGER,
    typeId: DataTypes.INTEGER
  }, {});
  VenueType.associate = function(models) {
    // associations can be defined here
  };
  return VenueType;
};