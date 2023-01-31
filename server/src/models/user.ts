import { Schema, Document, model } from 'mongoose';

export interface IUser {
  email: string;
  emailVerified: boolean;
  password?: string;
  emailToken?: string; // Randomized token used to verify email on register
}

// Interface to hold normal properties as well as document properties ie _id, timestamps
export interface IUserDocument extends IUser, Document {}

const userSchema: Schema<IUserDocument> = new Schema(
  {
    email: { type: String, required: true, unique: true },
    emailVerified: { type: Boolean, required: true, default: false },
    password: { type: String, required: false },
    emailToken: { type: String, required: false },
  },
  { timestamps: true },
);

/* 
Example of a virtual method and how it can be applied
userSchema
  .virtual('fullName')
  .get((user: IUser) => `${user.firstName} ${user.lastName}`);

*/

export default model<IUser>('User', userSchema);
