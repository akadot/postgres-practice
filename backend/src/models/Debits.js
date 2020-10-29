const { Model, DataTypes } = require("sequelize");

class Debts extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        value: DataTypes.FLOAT,
        description: DataTypes.TEXT,
        end_date: DataTypes.DATEONLY,
        notify_hour: DataTypes.TIME,
      },
      {
        sequelize: connection,
      }
    );
  }
}

module.exports = Debts;
