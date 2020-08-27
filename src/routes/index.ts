import { Router, Request, Response } from 'express';
import routes from './task.routes';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  return res.status(200).json({
    data: 'hello world API APP Task',
  });
});

router.use('/task', routes);

export default router;
