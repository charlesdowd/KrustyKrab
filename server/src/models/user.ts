import mongoose from 'mongoose';

const { Schema } = mongoose;

export interface IUser {
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName?: string;
}

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    password: { type: String, required: true },
  },
  { timestamps: true },
);

// Example of a virtual method and how it can be applied
userSchema
  .virtual('fullName')
  .get((user: IUser) => `${user.firstName} ${user.lastName}`);

export default mongoose.model<IUser>('User', userSchema);
