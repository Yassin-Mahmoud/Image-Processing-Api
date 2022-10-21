import express, { Request, Response } from "express";

import fs from "fs-extra";
import path from "path";

import imageProcessing from "../utilities/imageProcessing";

const routes = express.Router();

routes.get("/", async (req: Request, res: Response) => {
  const filename = String(req.query.filename);
  const width = Number(req.query.width);
  const height = Number(req.query.height);

  const myImage: string =
    path.join(__dirname, "../", "../", "/assets", "/images", filename) + ".jpg";

  if (!filename) {
    res.status(405).send("<h4>Please enter filename</h4>");
  } else {
    // checking if the full image exists or not
    if (!fs.existsSync(myImage)) {
      res
        .status(404)
        .send(
          "<h3>Image not found,</h3> please check image name and try again"
        );
    } else {
      try {
        res
          .status(200)
          .sendFile(await imageProcessing(filename, width, height));
      } catch (err) {
        res
          .status(405)
          .send(
            "<h3>Width or hight is not valide,</h3> Please enter valid width and height"
          );
      }
    }
  }
});

export default routes;
