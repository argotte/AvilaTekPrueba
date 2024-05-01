import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";
import { registerNewUserService,loginUserService } from "../services/auth";
import { msgNotFoundHttp } from "../utils/msgNotFound.handler";
import { wrongPassword } from "../utils/wrong.handle";

const registerController = async ({body}: Request, res: Response) => {
    try {
        const responseUser = await registerNewUserService(body);
        res.send(responseUser);
    }
    catch (error) {
        handleHttp(res, "error in register", error);
    }
};

const loginController = async ({ body }: Request, res: Response) => {
  try {
    const {username,password}=body;
    const responseUser = await loginUserService({ username, password });
    if(responseUser==="not found"){
        msgNotFoundHttp(res,"user");
        return;
    }
    if(responseUser==="wrong password"){
        wrongPassword(res,"user");
        return;
    }
    res.send(responseUser);
  } catch (error) {
    handleHttp(res, "error in login", error);
  }
};
export { registerController, loginController };