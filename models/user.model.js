module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    password: {
      type: Sequelize.STRING
    },
    username: {
      type: Sequelize.STRING
    }
   
  });

  return User;
};