import { Todo, ITodo } from '../../models';

export async function getTodos(): Promise<ITodo[]> {
  try {
    return await Todo.find({});
  } catch (error) {
    console.log(error);
    throw new Error();
  }
}
