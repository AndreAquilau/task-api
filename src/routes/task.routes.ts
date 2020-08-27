import { Router } from 'express';
import TaskController from '../controllers/TasckController';

const router = Router();

router.get('/', TaskController.index);
router.get('/:filter?', TaskController.show);
router.post('/', TaskController.store);
router.put('/:id', TaskController.update);
router.delete('/:id', TaskController.delete);

export default router;
