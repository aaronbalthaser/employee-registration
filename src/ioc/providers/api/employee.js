import { EmployeeService } from '../../services/api/employee/employee';

module.exports = function (container) {
  container.service('EmployeeService', (container) => {
    return new EmployeeService(container.Database);
  });
};
