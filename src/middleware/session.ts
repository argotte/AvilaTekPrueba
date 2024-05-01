import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt.handle';
import { JwtPayload } from 'jsonwebtoken';

interface IRequestExtended extends Request {
  user?: string | JwtPayload;
}

export const checkJWT = (req: IRequestExtended, res: Response, next: NextFunction) => {
  try {
    const Bearertoken = req.headers.authorization;
    if (!Bearertoken) {
      res.status(408).send("non valid session");
      return;
    }
    const token = Bearertoken.split(" ").pop() as string;
    const ValidUser = verifyToken(token);
    if (!ValidUser) {
      res.status(409).send(`${ValidUser} non valid Token. Could be expired`);
      return;
    }
    req.user = ValidUser;
    next();
  } catch (error) {
    res.status(408);
    res.send("non valid session");
  }
};