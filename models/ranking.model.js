
module.exports = (sequelize, Sequelize) => {
    const Ranking = sequelize.define("ranking", {
      time: {
        type: Sequelize.STRING
      }, 
      username: {
        type: Sequelize.STRING
      },
      gameId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'games',
          key: 'id'
        }
      }

    });

    // Ranking.associate = function(models) {
    //     Ranking.belongsTo(models.game, {
    //       onDelete: "CASCADE",
    //       foreignKey: "gameId",
    //       as: "game",
    //     })
    //   }
  
    return Ranking;
  }
  