import { Request, Response } from 'express';
import { ITodoDocument } from '../models';
import TodoService from '../services/todo';

/**
 *
 * @param req
 * @param res
 * @returns { ITodoDocument[] } all todos
 */
async function getAllTodos(req: Request, res: Response<ITodoDocument[]>) {
  const todos = await TodoService.getAllTodos();
  return res.status(200).json(todos);
}

export default {
  getAllTodos,
};
