import { Request, Response } from 'express';
import { ITodo } from '../models';
import TodoService from '../services/todo';

/**
 *
 * @param req
 * @param res
 * @returns { ITodo[] } all todos
 */
async function getTodos(req: Request, res: Response<ITodo[]>) {
  try {
    const todos = await TodoService.getTodos();
    return res.status(200).json(todos);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
}

export default {
  getTodos,
};
