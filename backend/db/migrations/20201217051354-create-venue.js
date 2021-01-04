'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Venues', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      totalOccupacy: {
        type: Sequelize.INTEGER
      },
      summary: {
        type: Sequelize.TEXT
      },
      address: {
        type: Sequelize.TEXT
      },
      hasKitchen: {
        type: Sequelize.BOOLEAN
      },
      hasAirCon: {
        type: Sequelize.BOOLEAN
      },
      hasHeating: {
        type: Sequelize.BOOLEAN
      },
      hasInternet: {
        type: Sequelize.BOOLEAN
      },
      pricePerDay: {
        type: Sequelize.INTEGER
      },
      ownerId: {
        type: Sequelize.INTEGER,
        references: {model: 'Users'}
      },
      typeOfVenue: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Venues');
  }
};