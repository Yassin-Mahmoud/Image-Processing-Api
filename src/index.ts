import express, { Application } from "express";
import morgan from "morgan";

const app: Application = express();
const PORT = 3000;

// logger middleware
//app.use(morgan("dev"));

// main page
import main from "./routes/main";
app.use("/", main);

// image processing page
import image from "./routes/image";
app.use("/image", image);

app.listen(PORT, () => {
  console.log(`server is running on: http://localhost:${PORT}`);
});

export default app;
