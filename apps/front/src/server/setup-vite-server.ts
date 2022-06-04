import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer } from 'vite';
import { createRoute } from './types/create-route';

const createContentsRoute:createRoute = async () => {
  const router = express.Router();

  const vite = await createServer({
    root: path.resolve(__dirname, '..', '..'),
    server: {
      middlewareMode: true,
      watch: {
        usePolling: true,
        interval: 100,
      },
    },
  });

  router.use(vite.middlewares);

  router.use('*', async (req, res) => {
    const url = req.originalUrl;
    const html = fs.readFileSync(path.resolve(__dirname, '..', '..', 'index.html'), 'utf-8');
    res.status(200)
      .set({'Content-Type': 'text/html'})
      .end(await vite.transformIndexHtml(url, html));
  });

  return router;
};

module.exports = createContentsRoute;
