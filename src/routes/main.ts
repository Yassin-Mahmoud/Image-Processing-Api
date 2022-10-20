import express, { Request, Response } from "express";
const routes = express.Router();

routes.get("/", (req: Request, res: Response) => {
  res
    .status(200)
    .send(
      "<h2>Welcome to Yassin's 'Image Processing' Api</h2> <h3>Example</h3><h4>[ To display the image ]:</h4><h5>http://localhost:3000/image?filename=imagename </h5> <h4>[ To display and resize the image ]:</h4> <h5>http://localhost:3000/image?filename=imagename&width=200&height=200</h5>"
    );
});

export default routes;
