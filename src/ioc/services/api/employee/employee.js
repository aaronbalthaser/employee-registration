export class EmployeeService {
  constructor(database) {
    this._database = database.db;
  }

  async createEmployee(body) {
    const { fullName, position, phoneNumber, empCode } = body;

    try {
      const employee = await this._database.Employee.create({
        fullName: fullName,
        position: position,
        phoneNumber: phoneNumber,
        empCode: empCode
      });

      if (employee) {
        return {
          success: true,
          employee: employee
        }
      } else {
        return {
          success: true,
          employee: {}
        }
      }
    } catch (error) {

    }
  }

  async getEmployees() {
    try {
      const employees = await this._database.Employee.findAll();

      if (employees.length) {
        return {
          success: true,
          employees: employees
        }
      } else {
        return {
          success: true,
          employees: []
        }
      }
    } catch (error) {

    }
  }

  async updateEmployee(body, id) {
    const { fullName, position, phoneNumber, empCode } = body;

    try {
      const updated = await this._database.Employee.update({
        fullName: fullName,
        position: position,
        phoneNumber: phoneNumber,
        empCode: empCode
      },
        {
          where: { id: id },
          returning: true
        }
      );

      if (updated[0]) {
        return {
          success: true,
          employee: updated[1][0]
        }
      } else {
        return {
          success: false,
          employee: {}
        }
      }
    } catch (error) {

    }
  }

  async deleteEmployee(id) {
    try {
      const deleted = await this._database.Employee.destroy({
        where: { id: id }
      });

      if (deleted) {
        return {
          success: true
        }
      } else {
        return {
          success: false
        }
      }
    } catch (error) {

    }
  }
}
