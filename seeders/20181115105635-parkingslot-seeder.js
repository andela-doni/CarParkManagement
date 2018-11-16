'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('ParkingSlots', [{
        parkingLotID: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        parkingLotID: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        parkingLotID: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        parkingLotID: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        parkingLotID: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        parkingLotID: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        parkingLotID: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        parkingLotID: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        parkingLotID: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        parkingLotID: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
