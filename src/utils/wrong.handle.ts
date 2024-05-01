import { Response } from "express";

const wrongPassword = (res: Response, thing: string) => {
  res.status(402);
  res.send({ message: `${thing}: wrong password` });
};
export { wrongPassword };
