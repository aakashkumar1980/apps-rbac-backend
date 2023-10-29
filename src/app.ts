import express from 'express';
import { loadConfigFromCloud, getPort } from './utils/port-loader';
import { initializeDatabase} from './components/db/db-connection';
import default_routes from './components/api/default';

import { appsRouter } from './components/api/module/app';
import { appsfeaturesRouter } from './components/api/module/appfeatures';
import { roleRouter } from './components/api/module/role';
import { roleAppfeaturesRouter } from './components/api/module/role_appfeatures';
import { userAppsRoleRouter } from './components/api/module/user_apps_roles';
import { externalRouter } from './components/api/module/external';

async function initializeApp() {
  const app = express();
  const cors = require('cors');
  app.use(express.json());
  app.use(cors());

  // initialize DB
  initializeDatabase();
  // initialize Configs
  await loadConfigFromCloud()

  // mount APIs
  app.use(default_routes);
  app.use('/api/app', appsRouter);
  app.use('/api/appfeatures', appsfeaturesRouter);
  app.use('/api/role', roleRouter);
  app.use('/api/role_appfeatures', roleAppfeaturesRouter);
  app.use('/api/user_apps_roles', userAppsRoleRouter);
  app.use('/api/external', externalRouter);

  // Start the Express server
  app.listen(getPort(), () => {
    console.log(`Server is running at http://localhost:${getPort()}/`);
  });

  return app;
}

// Start the application
initializeApp();
export default initializeApp;