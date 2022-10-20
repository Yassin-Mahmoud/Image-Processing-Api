import express, { Request, Response } from "express";
import path from "path";
const routes = express.Router();

routes.get("/", (req: Request, res: Response) => {
  res.status(200).sendFile(path.join(__dirname, "../../main.html"));
});

export default routes;
