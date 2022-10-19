import express, { Request, Response } from "express";
const routes = express.Router();

routes.get("/", (req: Request, res: Response) => {
  res.status(200).send("<h2>Welcome to Yassin's 'Image Processing' Api</h2>");
});

export default routes;
