import express from 'express';
import morgan from 'morgan';
import { createRoute } from './types/create-route';

const main = async () => {
  const {PORT = 3001} = process.env;

  const app = express();
  app.use(morgan('dev'));

  const createContentsRoute:createRoute = 
    process.env.TS_NODE_DEV === 'true' ?
    require('./setup-vite-server') : 
    require('./setup-server');
  app.use(await createContentsRoute());

  app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
  });
};

console.log('sarting server...');
main();
