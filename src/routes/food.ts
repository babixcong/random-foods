import { Router } from 'express';
import FootService from '../services/FootService';
import { ApiConfig } from '../config/config';

const routerFood = Router();
routerFood.get('/', FootService.Index);
routerFood.get(ApiConfig.VERSION + '/get-food', FootService.GetFood);

export default routerFood;
