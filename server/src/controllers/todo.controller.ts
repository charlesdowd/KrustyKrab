import { Request, Response } from 'express';
import { ITodo } from '../models';
import TodoService from '../services/todo';

/**
 *
 * @param req
 * @param res
 * @returns { ITodo[] } all todos
 */
async function getAllTodos(req: Request, res: Response<ITodo[]>) {
  const todos = await TodoService.getAllTodos();
  return res.status(200).json(todos);
}

export default {
  getAllTodos,
};
