const faker = require('faker');

module.exports = {
  async up(queryInterface, Sequelize) {
    const userAccountList = [];
    const memberDetailList = [];

    for (let i = 0; i < 10; i += 1) {
      userAccountList.push({
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        cookie: faker.internet.password(),
        created_at: new Date(),
        updated_at: new Date(),
      });
      memberDetailList.push({
        name: faker.name.findName(),
        dob: '02-11-1926',
        age: faker.datatype.number({ max: 100 }),
        gender: 'F',
        email: faker.internet.email(),
        details: faker.datatype.json(),
        created_at: new Date(),
        updated_at: new Date(),
      });
    }

    try {
      const result = await queryInterface.bulkInsert('useraccounts', userAccountList);
      const resultMember = await queryInterface.bulkInsert('memberdetails', memberDetailList);
    } catch (error) {
      console.log(error);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('useraccounts', null, {});
    await queryInterface.bulkDelete('memberdetails', null, {});
  },
};
