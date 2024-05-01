import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";
import { registerNewUserService } from "../services/auth";

const registerController = async ({body}: Request, res: Response) => {
    try {
        const responseUser = await registerNewUserService(body);
        res.send(responseUser);
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