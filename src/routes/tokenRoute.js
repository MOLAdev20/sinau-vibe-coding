import { Router } from 'express';
import { createTokenHandler } from '../controllers/tokenController.js';

const tokenRoute = Router();

tokenRoute.post('/', createTokenHandler);

export default tokenRoute;
