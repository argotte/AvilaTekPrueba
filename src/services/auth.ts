import UserModel from "../models/user";
import { Auth } from "../interfaces/auth.interface";
import { User } from "interfaces/user.interface";

export const registerNewUserService = async ({username,password,name,lastname}:User) => {
    try {
        const checkUserModelExist=await UserModel.findOne({username});
        if(checkUserModelExist){
            return("User already exist");
        }
        const registerNewUser=await UserModel.create({username,password,name,lastname});
        return registerNewUser;
    }
    catch (error) {
        throw error;
    }
};

const loginUserService = async () => {
    try {

    }
    catch (error) {
        throw error;
    }
}