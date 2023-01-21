import { HttpStatusError } from 'common-errors';
import { Todo, ITodo } from '../../models';

export async function getAllTodos(): Promise<ITodo[]> {
  try {
    return await Todo.find();
  } catch (error) {
    console.log(error);
    throw new HttpStatusError(500, 'Error getting all todos');
  }
}
