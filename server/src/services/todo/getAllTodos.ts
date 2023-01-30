import { Todo, ITodoDocument } from '../../models';
import { BaseError } from '../../interfaces/Errors';

export async function getAllTodos(): Promise<ITodoDocument[]> {
  try {
    return await Todo.find();
  } catch (error) {
    console.log(error);
    throw new BaseError('Error getting Todos');
  }
}
