import express from 'express';
import { getPort } from './utils/port-loader';
import { initializeDatabase} from './components/db/db-connection';
import default_routes from './components/api/default';

import { appsRouter } from './components/api/module/app';
import { appsFeaturesRouter } from './components/api/module/app_features';
import { roleRouter } from './components/api/module/role';
import { roleAppFeaturesRouter } from './components/api/module/role_app_features';
import { employeeAppsRoleRouter } from './components/api/module/employee_apps_roles';
import { externalRouter } from './components/api/module/external';

const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

// initialize DB
initializeDatabase();
// mount APIs
app.use(default_routes);
app.use('/api/app', appsRouter);
app.use('/api/app_features', appsFeaturesRouter);
app.use('/api/role', roleRouter);
app.use('/api/role_app_features', roleAppFeaturesRouter);
app.use('/api/employee_apps_roles', employeeAppsRoleRouter);
app.use('/api/external', externalRouter);

// Start the Express server
app.listen(getPort(), () => {
  console.log(`Server is running at http://localhost:${getPort()}/`);
});

export default app;
