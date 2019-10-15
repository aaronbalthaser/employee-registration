import { Sequelize } from 'sequelize';

export class Employee extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init({
      fullName: DataTypes.STRING,
      position: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      empCode: DataTypes.STRING
    }, { sequelize });
  }
}
