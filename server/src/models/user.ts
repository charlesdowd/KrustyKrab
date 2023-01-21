import mongoose from 'mongoose';

const { Schema } = mongoose;

export interface IUser {
  email: string;
  emailVerified: boolean;
  password?: string;
}

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    emailVerified: { type: Boolean, required: true, default: false },
    password: { type: String, required: false },
  },
  { timestamps: true },
);

/* 
Example of a virtual method and how it can be applied

userSchema
  .virtual('fullName')
  .get((user: IUser) => `${user.firstName} ${user.lastName}`);

*/

export default mongoose.model<IUser>('User', userSchema);
