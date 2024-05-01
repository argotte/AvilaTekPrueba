import { Response } from "express";

const msgNotFoundHttp = (res: Response, thing: string) => {
  res.status(200);
  res.send({ message: `${thing} not found` });
};
export { msgNotFoundHttp };
