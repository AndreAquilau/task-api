import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  return res.status(200).json({
    data: 'hello world API APP Task',
  });
});

export default router;
