import UserModel from "../models/user";
import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

export const registerNewUserService = async ({username,password,name,lastname}:User) => {
        const checkUserModelExist=await UserModel.findOne({username});
        if(checkUserModelExist){
            return("User already exist");
        }
        const passHash= await encrypt(password);
        const registerNewUser = await UserModel.create({
          username,
          password: passHash,
          name,
          lastname,
        });
        return registerNewUser;
};

export const loginUserService = async ({username,password}:Auth) => {
    const CheckIs=await UserModel.findOne({username});
    if(!CheckIs){
        return "not found";
    }
    const passwordHash=CheckIs.password;
    const isCorrect=await verified(password,passwordHash);
    if(!isCorrect){
        return "wrong password";
    }
    const token=generateToken(CheckIs.username);
    const data={
        token,
        user:CheckIs
    }
    return data;
}