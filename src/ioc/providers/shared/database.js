import { Database } from '../../services/shared/database/database';

import { Sequelize } from 'sequelize';

// Models Dependency Injection
import { User } from '../../services/shared/database/models/user.model';
import { Employee } from '../../services/shared/database/models/employee.model';

module.exports = function (container) {
	container.service('Database', (container) => {
		return new Database(
			container.ConfigManager,
			Sequelize,

			// Models
			User,
			Employee
		);
	});
};
