const Sequelize = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "records",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false,
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      tel: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      adress: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "records",
    }
  );
};
