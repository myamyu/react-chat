import express from 'express';
import { createRoute } from './types/create-route';

const createContentsRoute:createRoute = async () => {
  const router = express.Router();

  return router;
};

module.exports = createContentsRoute;
