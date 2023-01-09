import bcrypt from 'bcrypt';
import { HttpStatusError } from 'common-errors';
import { IUser, User } from '../../models';

export async function createNewUser(
  username: string,
  password: string,
  email: string,
  firstName: string,
): Promise<void> {
  // Check if all required fields are present
  if (!username || !password || !email || !firstName) {
    throw new HttpStatusError(400, 'All fields are required');
  }
  // Check if email already exists
  const duplicate = await User.findOne({ email });
  if (duplicate) throw new HttpStatusError(409, 'Email already exists');

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  const userObject: IUser = {
    username,
    password: hashedPassword,
    email,
    firstName,
  };

  const user = await User.create(userObject);

  if (!user) throw new HttpStatusError(400, 'Invalid user data received');
}
