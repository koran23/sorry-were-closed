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
      totalOccupacy: {
        type: Sequelize.INTEGER
      },
      summary: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      address: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      hasKitchen: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      hasAirCon: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      hasHeating: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      hasInternet: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      pricePerDay: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      ownerId: {
        type: Sequelize.INTEGER,
        references: {model: 'Users'}
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