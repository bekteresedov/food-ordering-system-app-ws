import express from 'express';
import { getFooter, saveFooter, updateFooter } from '../controllers/footerController';
import { authMiddleware, isAdmin } from '../middleware/authMiddleware';

const footerRouter = express.Router();
const main = "/footers"

footerRouter.post(`${main}/save`, authMiddleware, isAdmin, saveFooter);
footerRouter.patch(`${main}/update/:id`, authMiddleware, isAdmin, updateFooter);
footerRouter.get(`${main}/get/:id`, authMiddleware, isAdmin, getFooter);



export default footerRouter;