'use strict';

module.exports = (express, services) => {
  const router = express.Router();

  router.route('/')
    .post(async (req, res) => {
      const { body } = req;

      try {
        const response = await services.employeeService.createEmployee(body);

        if (response.success) {
          return res.status(200).json({
            success: true,
            employee: response.employee
          });
        } else {
          return res.status(200).json({
            success: true,
            employee: response.employee
          });
        }
      } catch (error) {

      }
    })
    .get(async (req, res) => {
      try {
        const response = await services.employeeService.getEmployees();

        if (response.success) {
          return res.status(200).json({
            success: true,
            employees: response.employees
          });
        } else {
          return res.status(200).json({
            success: false,
            user: {}
          });
        }
      } catch (error) {

      }
    });

  router.route('/:id')
    .put(async (req, res) => {
      const { id } = req.params;
      const { body } = req;

      try {
        const response = await services.employeeService.updateEmployee(body, id);

        if (response.success) {
          return res.status(200).json({
            success: true,
            employee: response.employee
          });
        } else {
          return res.status(200).json({
            success: false,
            employee: {}
          });
        }
      } catch (error) {

      }
    })
    .delete(async (req, res) => {
      const { id } = req.params;

      try {
        const response = await services.employeeService.deleteEmployee(id);

        if (response.success) {
          return res.status(200).json({
            success: true
          });
        } else {
          return res.status(200).json({
            success: false
          })
        }
      } catch (error) {

      }
    });

  return router;
};
