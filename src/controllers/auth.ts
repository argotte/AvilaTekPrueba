import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";

const registerController = async ({body}: Request, res: Response) => {
    try {
        // const responseUser=await registerNewUserService ();
    }
    catch (error) {
        handleHttp(res, "error in register", error);
    }
};

const loginController = async (req: Request, res: Response) => {
    try {

    }
    catch (error) {
        handleHttp(res, "error in login", error);
    }
};
export { registerController, loginController };