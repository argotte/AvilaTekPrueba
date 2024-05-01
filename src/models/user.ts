import { Schema, model } from "mongoose";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true }
    },
    {
    timestamps: true,
    versionKey: false  
    }
);
const UserModel = model<User>("users", UserSchema);
export default UserModel;
