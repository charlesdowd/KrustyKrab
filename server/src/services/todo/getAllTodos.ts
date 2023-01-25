import { Todo, ITodo } from '../../models';
import { BaseError } from '../../util/Errors';

export async function getAllTodos(): Promise<ITodo[]> {
  try {
    return await Todo.find();
  } catch (error) {
    console.log(error);
    throw new BaseError('Error getting Todos');
  }
}
