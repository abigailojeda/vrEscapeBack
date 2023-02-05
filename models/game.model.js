
module.exports = (sequelize, Sequelize) => {
    const Game = sequelize.define("game", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      }
    });
    
  
    return Game;
  }
  