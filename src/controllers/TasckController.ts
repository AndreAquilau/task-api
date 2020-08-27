import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Task from '../models/Task';

class TaskController {
  async index(req: Request, res: Response) {
    try {
      const repository = getRepository(Task);
      const data = await repository.find();
      return res.status(200).json({
        data,
      });
    } catch (err) {
      console.log(err.message);
      return res.status(400).json({
        errors: [err.message],
      });
    }
  }

  async show(req: Request, res: Response) {
    try {
      const repository = getRepository(Task);
      const data = await repository.findOne({
        where: {
          id: req.params.filter,
        },
      });
      return res.status(200).json({
        data,
      });
    } catch (err) {
      console.log(err.message);
      return res.status(400).json({
        errors: [err.message],
      });
    }
  }

  async store(req: Request, res: Response) {
    try {
      const repository = getRepository(Task);
      const data = await repository.save(req.body);
      return res.status(201).json({
        data,
      });
    } catch (err) {
      console.log(err.message);
      return res.status(400).json({
        errors: [err.message],
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const repository = getRepository(Task);
      const data = await repository.update({ id: req.params.id }, req.body);
      return res.status(200).json({
        data,
      });
    } catch (err) {
      console.log(err.message);
      return res.status(400).json({
        errors: [err.message],
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const repository = getRepository(Task);
      const data = await repository.delete({ id: req.params.id });
      return res.status(200).json({
        data,
      });
    } catch (err) {
      console.log(err.message);
      return res.status(400).json({
        errors: [err.message],
      });
    }
  }
}

export default new TaskController();
